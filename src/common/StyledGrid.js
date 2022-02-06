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
}
`;

const StyledGrid = (props) => {
  const { is_flex, width, margin, padding, bg, children } = props;
  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
  };

  return <StyledGridBlock {...styles}>{children}</StyledGridBlock>;
};

StyledGrid.defaultProps = {
  children: null,
  is_flex: false,
  width: "",
  padding: false,
  margin: false,
  bg: false,
};

export default StyledGrid;
