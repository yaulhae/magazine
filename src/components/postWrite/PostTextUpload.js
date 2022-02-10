import styled from "styled-components";
import React, { useState } from "react";
import { StyledButton, StyledGrid, StyledText } from "../../common";
import { useDispatch } from "react-redux";
import post, { addPostFB, editPostFB } from "../../module/post";
import { useSelector } from "react-redux";

const PostTextUploadBlock = styled.div``;

const PostTextUpload = ({ post, is_edit }) => {
  const dispatch = useDispatch();
  const [contents, setContents] = useState(post ? post.post_text : "");
  const preview = useSelector(({ image }) => image.preview);
  const checkL = useSelector(({ post }) => post.checkL);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const editPost = () => {
    dispatch(editPostFB(post.id, { post_text: contents }));
  };

  return (
    <PostTextUploadBlock>
      <StyledGrid>
        <StyledText size="0.8em" margin="0 0 0.5em 0">
          게시물 내용
        </StyledText>
        <textarea
          value={contents}
          placeholder="게시글 작성"
          onChange={changeContents}
        ></textarea>
        {is_edit ? (
          <StyledButton
            width="100%"
            bg="#1B9CFC"
            onClick={() => dispatch(editPost)}
          >
            게시글 수정
          </StyledButton>
        ) : (
          <StyledButton
            width="100%"
            bg="#1B9CFC"
            onClick={() => dispatch(addPostFB(contents))}
            disabled={!contents || !preview || !checkL ? true : false}
          >
            게시글 작성
          </StyledButton>
        )}
      </StyledGrid>
    </PostTextUploadBlock>
  );
};

export default PostTextUpload;
