import React, { useState } from "react";
import { StyledGrid } from "../../common";
import PostItem from "./PostItem";

const PostList = () => {
  const [post, setPost] = useState([
    {
      profile: "https://ifh.cc/g/VbyHsy.jpg",
      username: "야울해",
      insert_dt: "2022-02-05 02:25:05",
      post_text: "아이고야",
      post_img: "https://ifh.cc/g/VbyHsy.jpg",
      like_count: "3",
      comment_count: "1",
      checked: false,
    },
    {
      profile: "https://ifh.cc/g/VbyHsy.jpg",
      username: "야울해",
      insert_dt: "2022-02-05 02:25:05",
      post_text: "아이고야",
      post_img: "https://ifh.cc/g/VbyHsy.jpg",
      like_count: "3",
      comment_count: "1",
      checked: false,
    },
    {
      profile: "https://ifh.cc/g/VbyHsy.jpg",
      username: "야울해",
      insert_dt: "2022-02-05 02:25:05",
      post_text: "아이고야",
      post_img: "https://ifh.cc/g/VbyHsy.jpg",
      like_count: "3",
      comment_count: "1",
      checked: false,
    },
    {
      profile: "https://ifh.cc/g/VbyHsy.jpg",
      username: "야울해",
      insert_dt: "2022-02-05 02:25:05",
      post_text: "아이고야",
      post_img: "https://ifh.cc/g/VbyHsy.jpg",
      like_count: "3",
      comment_count: "1",
      checked: false,
    },
  ]);
  return (
    <StyledGrid>
      {post.map((p, index) => {
        return <PostItem p={p} />;
      })}
    </StyledGrid>
  );
};

export default PostList;
