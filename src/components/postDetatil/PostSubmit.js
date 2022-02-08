import styled from "styled-components";
import React, { useState } from "react";
import { StyledButton, StyledGrid, StyledInput } from "../../common";
import { addCommentFB } from "../../module/comment";
import { useDispatch } from "react-redux";

const PostSubmit = (props) => {
  const dispatch = useDispatch();
  const [comment_text, setCommentText] = useState("");
  const { post_id } = props;
  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const write = () => {
    console.log(comment_text);
    setCommentText("");
    dispatch(addCommentFB(post_id, comment_text));
  };
  return (
    <StyledGrid>
      <StyledInput
        width="30%"
        placeholder="댓글 내용을 입력하세요 :)"
        padding="0.5em"
        value={comment_text}
        onChange={onChange}
        onSubmit={write}
      />
      <StyledButton width="70%" bg="#1B9CFC" onClick={write}>
        추가
      </StyledButton>
    </StyledGrid>
  );
};

export default PostSubmit;
