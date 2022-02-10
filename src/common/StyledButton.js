import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const StyledButtonBlock = styled.button`
  background: ${(props) => (props.bg ? props.bg : "")};
  width: ${(props) => (props.width ? props.width : "")};
  padding: ${(props) => (props.padding ? props.padding : "0.6em")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  border: 0;
  border-radius: 4px;
  color: white;
  font-size: ${(props) => (props.font_size ? props.font_size : "")};
  &:disabled {
    background: #82c9fd;
  }
`;

const StyledButton = (props) => {
  const { children, width, bg, padding, margin, onClick, font_size, disabled } =
    props;
  const styles = {
    bg: bg,
    width: width,
    padding: padding,
    margin: margin,
    font_size: font_size,
  };
  return (
    <StyledButtonBlock {...styles} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButtonBlock>
  );
};

StyledButton.defaultProps = {
  onClick: () => {},
  children: null,
  width: "",
  bg: false,
  padding: false,
  margin: false,
  font_size: false,
};

export default StyledButton;
