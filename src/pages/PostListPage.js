import styled from "styled-components";
import React, { useState } from "react";
import MagazineTemplate from "../common/MagazineTemplate";
import MagazineHeader from "../common/MagazineHeader";
import { StyledGrid, StyledImage, StyledText } from "../common";
import PostList from "../components/postList/PostList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PostListPageBlock = styled.div``;

const PostListPage = () => {
  return (
    <MagazineTemplate>
      <PostListPageBlock>
        <MagazineHeader onLogin={true} />
        <PostList />
      </PostListPageBlock>
    </MagazineTemplate>
  );
};

export default PostListPage;
