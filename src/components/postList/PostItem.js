import styled from "styled-components";
import React from "react";
import { StyledGrid, StyledImage, StyledText } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PostItem = ({ p }) => {
  return (
    <StyledGrid margin="0 0 3em 0">
      <StyledGrid is_flex="flex">
        <StyledGrid is_flex="flex">
          <StyledImage />
          <StyledText>{p.username}</StyledText>
        </StyledGrid>
        <StyledGrid>{p.insert_dt}</StyledGrid>
      </StyledGrid>

      <StyledGrid is_flex="flex" margin="0 0 2em 0">
        <StyledGrid width="60%">
          <StyledText text_align="center">{p.post_text}</StyledText>
        </StyledGrid>
        <StyledGrid width="40%">
          <img src="https://ifh.cc/g/nfOaLM.png" />
        </StyledGrid>
      </StyledGrid>

      <StyledGrid is_flex="flex">
        <StyledGrid is_flex="flex">
          <StyledText>좋아요{p.like_count}개</StyledText>
          <StyledText>댓글{p.comment_count}개</StyledText>
        </StyledGrid>
        <StyledGrid>
          <FontAwesomeIcon icon={faHeart} />
        </StyledGrid>
      </StyledGrid>
    </StyledGrid>
  );
};

export default PostItem;
