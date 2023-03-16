import React from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Course = ({ title, image, lessonsQuantity, skills, rate }) => {
  //   fetch("http://api.wisey.app/api/v1/core/preview-courses");
  fetch("http://api.wisey.app/api/v1/core/preview-courses", {
    headers: {
      Authentication:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0.Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM",
    },
  }).then((response) => {
    console.log({ response });
  });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lessons: {lessonsQuantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Skills: {skills.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rate: {rate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Course.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  lessonsQuantity: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  rate: PropTypes.string.isRequired,
};

export default Course;
