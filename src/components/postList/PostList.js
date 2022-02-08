import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StyledGrid } from "../../common";
import InfinityScroll from "../../common/InfinityScroll";
import { getPostFB } from "../../module/post";
import PostItem from "./PostItem";

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector(({ post }) => post.list);
  const user_info = useSelector(({ auth }) => auth.user);
  const is_loading = useSelector(({ post }) => post.is_loading);
  const paging = useSelector(({ post }) => post.paging);
  useEffect(() => {
    if (post_list.length < 2) {
      dispatch(getPostFB());
    }
  }, []);

  return (
    <StyledGrid>
      <InfinityScroll
        callNext={() => {
          dispatch(getPostFB(paging.next));
        }}
        is_next={paging?.next ? true : false}
        loading={is_loading}
      >
        {post_list.map((p, index) => {
          if (p.user_id === user_info?.uid) {
            return <PostItem p={p} key={index} is_me />;
          } else {
            return <PostItem p={p} key={index} />;
          }
        })}
      </InfinityScroll>
    </StyledGrid>
  );
};

export default PostList;
