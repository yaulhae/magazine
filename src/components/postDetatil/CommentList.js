import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { StyledGrid, StyledImage, StyledText } from "../../common";

const CommentList = () => {
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
    <>
      {commentList.map((c, i) => {
        return (
          <StyledGrid is_flex="flex">
            <StyledGrid is_flex="flex">
              <StyledImage />
              <StyledText>{c.username}</StyledText>
            </StyledGrid>
            <StyledText>{c.comment_text}</StyledText>
            <StyledText>{c.insert_dt}</StyledText>
          </StyledGrid>
        );
      })}
    </>
  );
};

export default CommentList;
