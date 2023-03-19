import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Video = ({ videoRef, playVideo, setPlayVideo, muted }) => (
  <StyledVideo
    ref={videoRef}
    type="application/x-mpegURL"
    autoPlay={playVideo}
    onClick={() => setPlayVideo(!playVideo)}
    muted={muted}
  />
);

export default Video;

Video.propTypes = {
  videoRef: PropTypes.object.isRequired,
  playVideo: PropTypes.bool.isRequired,
  setPlayVideo: PropTypes.func.isRequired,
  muted: PropTypes.bool,
};

Video.defaultProps = {
  muted: false
};


const StyledVideo = styled.video`
  max-width: 100%;
  width: 100%;
  height: 300px;
  max-height: 300px;
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 2;
`;
