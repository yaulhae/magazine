import styled from "styled-components";
import React from "react";

const StyledTextBlock = styled.p`
  font-size: ${(props) => (props.size ? props.size : "")};
  font-weight: ${(props) => (props.bold ? props.bold : "")};
  color: ${(props) => (props.color ? props.color : "")};
  flex-shrink: 0;
  margin: ${(props) => (props.margin ? props.margin : "")};
  text-align: ${(props) => (props.text_align ? props.text_align : "")};
`;

const StyledText = (props) => {
  const { bold, size, color, children, margin, text_align } = props;
  const styles = {
    bold: bold,
    size: size,
    color: color,
    margin: margin,
    text_align: text_align,
  };
  return <StyledTextBlock {...styles}>{children}</StyledTextBlock>;
};

StyledText.defaultProps = {
  children: null,
  text_align: false,
  bold: "",
  size: "",
  color: "#222831",
  margin: false,
};

export default StyledText;
