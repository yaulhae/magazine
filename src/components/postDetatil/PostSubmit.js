import styled from "styled-components";
import React, { useState } from "react";
import { StyledButton, StyledGrid, StyledInput } from "../../common";
import { addCommentFB } from "../../module/comment";
import { useDispatch } from "react-redux";
import { deletePostFB } from "../../module/post";

const PostSubmit = (props) => {
  const dispatch = useDispatch();
  const [comment_text, setCommentText] = useState("");
  const { post_id } = props;
  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const deletePost = (id) => {
    dispatch(deletePostFB(id));
    console.log("삭제 됐니?");
  };

  const write = () => {
    setCommentText("");
    dispatch(addCommentFB(post_id, comment_text));
  };
  return (
    <StyledGrid>
      <StyledButton
        width="100%"
        bg="#1B9CFC"
        margin="0 0 2em 0"
        onClick={() => deletePost(post_id)}
      >
        삭제하기
      </StyledButton>
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
    </StyledGrid>
  );
};

export default PostSubmit;
