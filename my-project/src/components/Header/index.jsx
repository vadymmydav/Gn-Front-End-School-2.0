import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";

const Header = ({ title, space}) => (
  <StyledBox position="static" enableColorOnDark space={space}>
    {title}
  </StyledBox>
);

export default Header;

const StyledBox = styled(AppBar)`
  text-align: center;
  position: relative;
  margin-bottom: ${({space}) => space || '50px'};
  padding: 18px 0px;
  font-size: 20px;
`;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  space: PropTypes.string
};

Header.defaultProps = {
  space: undefined
};

