import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Hls from "hls.js";

import { useGetCourseQuery } from "../../store/api";
import ROUTES from "../../constants/routes";

import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Video from "../../components/Video";
import {
  StyledLessonsWrapper,
  StyledDescription,
  StyledTitle,
  StyledVideo,
  StyledCardContent,
  StyledTypography,
  StyledCard
} from "./styledComponents";

const Course = () => {
  const navigate = useNavigate();
  const { course_id: courseId } = useParams();

  const { data, isLoading } = useGetCourseQuery(courseId);

  const [loadingVideo, setLoadingVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef(null);

  const handleVideo = () => {
    if (playVideo) {
      setPlayVideo(false);
      return videoRef.current.pause();
    }
    setPlayVideo(true);
    videoRef.current.play();
  };

  useEffect(() => {
    if (data) {
      setSelectedVideo(data.lessons[0]?.link);
      setPlayVideo(true);
    }
  }, [data]);

  useEffect(() => {
    if (selectedVideo) {
      setPlayVideo(false);
      setLoadingVideo(true);

      const hls = new Hls({
        xhrSetup: (xhr) => {
          xhr.setRequestHeader("Accept", "application/x-mpegURL");
        },
      });

      hls.loadSource(selectedVideo);
      hls.attachMedia(videoRef.current);

      setLoadingVideo(false);
      setPlayVideo(true);

      return () => hls.destroy();
    }
  }, [selectedVideo]);

  return (
    <div>
      <Header title="Course" space="15px" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Button variant="outlined" onClick={() => navigate(ROUTES.COURSES)}>
            <ArrowBackIcon /> ALL COURSES
          </Button>
          <StyledTitle variant="h5">{data.title}</StyledTitle>
          <StyledDescription>{data.description}</StyledDescription>
          <StyledVideo onClick={handleVideo}>
            {loadingVideo ? (
              <Loader />
            ) : (
              <Video
                videoRef={videoRef}
                playVideo={playVideo}
                setPlayVideo={setPlayVideo}
              />
            )}
          </StyledVideo>

          <Header title="Lessons" />
          <StyledLessonsWrapper>
            {data.lessons.map((lesson) => {
              const locked = lesson.status === "locked";

              return (
                <StyledCard
                  key={lesson.id}
                  onClick={() => !locked && setSelectedVideo(lesson.link)}
                >
                  <StyledCardContent locked={locked}>
                    <StyledTypography
                      gutterBottom
                      variant="div"
                      locked={locked}
                    >
                      {lesson.title}
                      {locked && (
                        <Tooltip
                          title="Unfortunately this video is currently locked"
                          placement="top-end"
                        >
                          <IconButton>
                            <QuestionMarkIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </StyledTypography>
                  </StyledCardContent>
                </StyledCard>
              );
            })}
          </StyledLessonsWrapper>
        </>
      )}
    </div>
  );
};

export default Course;