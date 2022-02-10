import styled from "styled-components";
import React, { useEffect, useState } from "react";
import MagazineTemplate from "../common/MagazineTemplate";
import MagazineHeader from "../common/MagazineHeader";
import { StyledButton, StyledGrid, StyledInput, StyledText } from "../common";
import PostFileUpload from "../components/postWrite/PostFileUpload";
import PostFileLayOut from "../components/postWrite/PostFileLayOut";
import PostTextUpload from "../components/postWrite/PostTextUpload";
import { useSelector } from "react-redux";
import auth from "../module/auth";
import { history } from "../App";
import { useParams } from "react-router-dom";
import post from "../module/post";
import { setPreview } from "../module/image";
import { useDispatch } from "react-redux";

const PostWritePageBlock = styled.div`
  textarea {
    width: 100%;
    min-height: 150px;
    height: 100%;
    overflow-y: auto;
    padding: 0.2em 0.4em;
    border: 2px solid rgb(37, 204, 247);
    border-radius: 8px;
    margin-bottom: 1.6em;
    &:focus {
      outline: none;
      border: 2px solid rgb(27, 156, 252);
    }
  }
  label {
    font-weight: 600;
  }
  .label-b {
    color: #5da1fc;
  }
  input[type="radio"] {
    margin-right: 0.4em;
  }
  .w-100 {
    width: 100%;
  }
`;

const PostWritePage = () => {
  const dispatch = useDispatch();
  const is_login = useSelector(({ auth }) => auth.is_login);
  const post_list = useSelector(({ post }) => post.list);
  const id = useParams().id;

  const post_id = id;
  const is_edit = post_id ? true : false;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요!");
      history.back();
      return;
    }

    if (is_edit) {
      dispatch(setPreview(_post.post_img));
    }
  }, []);

  if (!is_login) {
    return (
      <MagazineTemplate>
        <StyledGrid margin="100px 0px" padding="16px" text_align="center">
          <StyledText size="32px" bold="600">
            앗! 잠깐!
          </StyledText>
          <StyledText size="16px">로그인 후에만 글을 쓸 수 있어요!</StyledText>
          <StyledButton
            width="100%"
            bg="#1B9CFC"
            onClick={() => {
              history.replace("/login");
            }}
          >
            로그인 하러가기
          </StyledButton>
        </StyledGrid>
      </MagazineTemplate>
    );
  }
  return (
    <MagazineTemplate>
      <PostWritePageBlock>
        <MagazineHeader />
        <PostFileUpload is_edit={is_edit} />
        <PostFileLayOut />
        <PostTextUpload post={_post} is_edit={is_edit} />
      </PostWritePageBlock>
    </MagazineTemplate>
  );
};

export default PostWritePage;
