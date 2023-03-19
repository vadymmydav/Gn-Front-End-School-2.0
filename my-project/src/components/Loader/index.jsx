import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styled from "styled-components";

const Loader = () => (
  <StyledBox>
    <CircularProgress />
    <StyledText>Loading...</StyledText>
  </StyledBox>
);


export default Loader;

const StyledBox = styled(Box)`
display: flex;
justify-content: center;
`
const StyledText = styled(Box)`
display: flex;
align-items: center;
margin-left: 10px
`
