import styled from "styled-components";
import React from "react";
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

const PostDetailPageBlock = styled.div``;

const PostDetailPage = () => {
  const [p, setP] = useState({
    profile: "https://ifh.cc/g/VbyHsy.jpg",
    username: "야울해",
    insert_dt: "2022-02-05 02:25:05",
    post_text: "아이고야",
    post_img: "https://ifh.cc/g/VbyHsy.jpg",
    like_count: "3",
    comment_count: "1",
    checked: false,
  });
  const [commentList, setCommentList] = useState([
    {
      comment_img: "https://ifh.cc/g/VbyHsy.jpg",
      username: "야울해",
      comment_text: "재활용이 편리하긴 하다",
      insert_dt: "2022-02-05 02:25:05",
    },
    {
      comment_img: "https://ifh.cc/g/VbyHsy.jpg",
      username: "야울해",
      comment_text: "재활용이 편리하긴 하다",
      insert_dt: "2022-02-05 02:25:05",
    },
    {
      comment_img: "https://ifh.cc/g/VbyHsy.jpg",
      username: "야울해",
      comment_text: "재활용이 편리하긴 하다",
      insert_dt: "2022-02-05 02:25:05",
    },
    {
      comment_img: "https://ifh.cc/g/VbyHsy.jpg",
      username: "야울해",
      comment_text: "재활용이 편리하긴 하다",
      insert_dt: "2022-02-05 02:25:05",
    },
  ]);
  return (
    <MagazineTemplate>
      <PostDetailPageBlock>
        <MagazineHeader onLogin={true} />
        <PostItem p={p} />
        <PostSubmit />
        <CommentList />
      </PostDetailPageBlock>
    </MagazineTemplate>
  );
};

export default PostDetailPage;
