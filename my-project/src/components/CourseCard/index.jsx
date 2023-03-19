import React from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  title,
  lessonsCount,
  skills,
  rate,
  description,
  handleVideoHover,
  video,
  handleVideoPause,
  id
}) => {
  const navigate = useNavigate()

  const handleNavigateToCourseInfo = () => {
    navigate(`/${id}`)
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleNavigateToCourseInfo}>
      <CardActionArea>
        <StyledButton
          onMouseEnter={() => handleVideoHover(video)}
          onMouseLeave={handleVideoPause}
          variant="outlined"
        >
          Play <PlayCircleFilledWhiteIcon />
        </StyledButton>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lessons: {lessonsCount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Skills: {skills?.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rate: {rate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  lessonsCount: PropTypes.number.isRequired,
  skills: PropTypes.array.isRequired,
  rate: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  handleVideoHover: PropTypes.func.isRequired,
  handleVideoPause: PropTypes.func.isRequired,
  video: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CourseCard;


const StyledButton = styled(Button)`
width: 100%;
`
