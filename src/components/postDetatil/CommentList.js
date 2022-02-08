import styled from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";
import { StyledGrid, StyledImage, StyledText } from "../../common";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCommentFB } from "../../module/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);

  const { post_id } = props;

  useEffect(() => {
    if (!comment_list[post_id]) {
      dispatch(getCommentFB(post_id));
    }
  }, []);

  if (!comment_list[post_id] || !post_id) {
    return null;
  }

  return (
    <>
      {comment_list[post_id].map((c, i) => {
        return (
          <StyledGrid is_flex="flex" key={i}>
            <StyledGrid is_flex="flex">
              <StyledImage />
              <StyledText>{c.user_name}</StyledText>
            </StyledGrid>
            <StyledText>{c.contents}</StyledText>
            <StyledText>{c.insert_dt}</StyledText>
          </StyledGrid>
        );
      })}
    </>
  );
};

CommentList.defaultProps = {
  post_id: null,
};

export default CommentList;
