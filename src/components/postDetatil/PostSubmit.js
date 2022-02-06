import styled from "styled-components";
import React from "react";
import { StyledButton, StyledGrid, StyledInput } from "../../common";

const PostSubmit = () => {
  return (
    <StyledGrid>
      <StyledInput
        width="30%"
        placeholder="댓글 내용을 입력하세요 :)"
        padding="0.5em"
      />
      <StyledButton width="70%" bg="#1B9CFC">
        추가
      </StyledButton>
    </StyledGrid>
  );
};

export default PostSubmit;
