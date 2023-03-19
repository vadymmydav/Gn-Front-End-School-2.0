import { Typography, Card, CardContent,  } from "@mui/material";
import styled from "styled-components";

export const StyledTypography = styled(Typography)`
  color: ${({ locked }) => (locked ? "white" : "black")};
`;
export const StyledCardContent = styled(CardContent)`
  background-color: ${({ locked }) => (locked ? "red" : "white")};
  padding-bottom: 10px !important;
  display: ${({ locked }) => locked && "flex"};
  justify-content: ${({ locked }) => locked && "space-between"};
  align-content: ${({ locked }) => locked && "center"};
`;
export const StyledCard = styled(Card)`
  margin-bottom: 15px;
  padding-bottom: ${({ locked }) => (locked ? "0px" : "20px")};
  cursor: ${({ locked }) => (locked ? "not-allowed" : "pointer")};
`;
export const StyledVideo = styled.div`
  margin-bottom: 40px;
`;
export const StyledTitle = styled(Typography)`
  padding-top: 40px;
  text-align: center;
`;
export const StyledDescription = styled.p`
  text-align: center;
`;
export const StyledLessonsWrapper = styled.div`
width: 70%;
margin 0 auto;`;
