import React, { useEffect, useState, useRef, useCallback } from "react";
import Hls from "hls.js";
import styled from "styled-components";
import { Alert } from "@mui/material";

import { useGetCoursesQuery } from "../../store/api";

import CourseCard from "../../components/CourseCard";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Video from "../../components/Video";

const Courses = () => {
  const { data, isLoading, error } = useGetCoursesQuery();

  const [loadingVideos, setLoadingVideos] = useState(false);
  const [videos, setVideos] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    if (data?.courses) {
      setLoadingVideos(true);

      const videos = data.courses.map(
        (course) => course.meta.courseVideoPreview?.link
      );
      setVideos(videos);
      setSelectedVideo(videos[0]);
      setLoadingVideos(false);
    }
  }, [data, setVideos, setLoadingVideos, setSelectedVideo]);

  useEffect(() => {
    if (selectedVideo) {
      const hls = new Hls({
        xhrSetup: (xhr) => {
          xhr.setRequestHeader("Accept", "application/x-mpegURL");
        },
      });

      hls.loadSource(selectedVideo);
      hls.attachMedia(videoRef.current);

      return () => hls.destroy();
    }
  }, [selectedVideo]);

  const handleVideoHover = useCallback(
    (video) => {
      setSelectedVideo(video);
      setPlayVideo(true);
    },
    [setSelectedVideo, setPlayVideo]
  );

  const handleVideoPause = useCallback(() => {
    setPlayVideo(false);
    videoRef.current.pause();
  }, [videoRef, setPlayVideo]);

  return (
    <>
      <Header title="Courses" />
      <Container>
        {(loadingVideos || isLoading) && <Loader />}
        {error && <Alert severity="error">{error}</Alert>}
        {videos && data.courses && (
          <>
            <Video
              videoRef={videoRef}
              playVideo={playVideo}
              setPlayVideo={setPlayVideo}
              muted
            />
            <CoursesContainer>
              {data.courses.map(
                (course, idx) =>
                  idx <= 9 && (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      lessonsCount={course.lessonsCount}
                      skills={course.meta.skills}
                      rate={course.rating}
                      handleVideoHover={handleVideoHover}
                      video={videos[idx]}
                      handleVideoPause={handleVideoPause}
                      id={course.id}
                    />
                  )
              )}
            </CoursesContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default Courses;

const Container = styled.div`
  width: 96%;
  margin: 0 auto;
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  margin-top: 100px;
`;
