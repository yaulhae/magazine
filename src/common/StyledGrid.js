import styled from "styled-components";
import React from "react";

const StyledGridBlock = styled.div`
  width: ${(props) => (props.width ? props.width : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  display: ${(props) => (props.is_flex ? props.is_flex : "")};
  justify-content: ${(props) => (props.is_flex ? "space-between;" : "")}
  align-items: ${(props) => (props.is_flex ? "center;" : "")};
  text-align: ${(props) => (props.text_align ? props.text_align : "")};
  flex-direction: ${(props) =>
    props.flex_direction ? props.flex_direction : ""}
}
`;

const StyledGrid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    text_align,
    onClick,
    flex_direction,
  } = props;
  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    text_align: text_align,
    flex_direction: flex_direction,
  };

  return (
    <StyledGridBlock {...styles} onClick={onClick}>
      {children}
    </StyledGridBlock>
  );
};

StyledGrid.defaultProps = {
  flex_direction: false,
  onClick: () => {},
  text_align: false,
  children: null,
  is_flex: false,
  width: "",
  padding: false,
  margin: false,
  bg: false,
};

export default StyledGrid;
