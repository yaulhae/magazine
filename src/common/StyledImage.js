import styled from "styled-components";
import React from "react";

const StyledCircleImage = styled.div`
  --size: ${(props) => props.size};
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 0.5em;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const StyledImage = (props) => {
  const { shape, size, src } = props;
  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <StyledCircleImage {...styles}></StyledCircleImage>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles} />
      </AspectOutter>
    );
  }
  return <></>;
};

StyledImage.defaultProps = {
  shape: "circle",
  size: "36px",
  src: "https://ifh.cc/g/VbyHsy.jpg",
};

export default StyledImage;
