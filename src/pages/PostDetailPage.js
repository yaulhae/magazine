import styled from "styled-components";
import React, { useEffect } from "react";
import MagazineTemplate from "../common/MagazineTemplate";
import MagazineHeader from "../common/MagazineHeader";
import PostItem from "../components/postList/PostItem";
import { useState } from "react";
import {
  StyledButton,
  StyledGrid,
  StyledImage,
  StyledInput,
  StyledText,
} from "../common";
import PostSubmit from "../components/postDetatil/PostSubmit";
import CommentList from "../components/postDetatil/CommentList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { firestore } from "../firebase";
import { getOnePostFB } from "../module/post";
import { useDispatch } from "react-redux";
import Permit from "../common/Permit";

const PostDetailPageBlock = styled.div``;

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const id = useParams().id;

  const user = useSelector(({ auth }) => auth.user);
  const post_list = useSelector(({ post }) => post.list);
  const post_idx = post_list.findIndex((p) => p.id === id);
  const post = post_list[post_idx];
  useEffect(() => {
    if (post) {
      return;
    }

    dispatch(getOnePostFB(id));
  }, []);

  return (
    <MagazineTemplate>
      <PostDetailPageBlock>
        <MagazineHeader />
        {post && <PostItem p={post} is_me={post.user_id === user?.uid} />}
        <Permit>
          <PostSubmit post_id={id} />
        </Permit>
        <CommentList post_id={id} />
      </PostDetailPageBlock>
    </MagazineTemplate>
  );
};

export default PostDetailPage;
