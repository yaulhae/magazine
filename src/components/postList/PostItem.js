import styled from "styled-components";
import React from "react";
import {
  StyledButton,
  StyledGrid,
  StyledImage,
  StyledText,
} from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { history } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { deLikeFB, likeUpFB } from "../../module/post";

const PostItem = ({ p, is_me }) => {
  const is_login = useSelector(({ auth }) => auth.is_login);
  const user_uid = useSelector(({ auth }) => auth.user?.uid);
  const dispatch = useDispatch();

  const like = (id, user_uid) => {
    if (!is_login) {
      return history.push("/caution");
    }
    dispatch(likeUpFB(id, user_uid));
  };
  const delike = (id, user_uid) => {
    if (!is_login) {
      return history.push("/caution");
    }
    dispatch(deLikeFB(id, user_uid));
  };
  return (
    <StyledGrid margin="0 0 3em 0">
      <StyledGrid is_flex="flex">
        <StyledGrid is_flex="flex">
          <StyledImage />
          <StyledText>{p.username}</StyledText>
        </StyledGrid>
        <StyledGrid is_flex="flex">
          <StyledText margin="0 0 0 0.3em">{p.insert_dt}</StyledText>
          {is_me && (
            <StyledButton
              bg="#1B9CFC"
              padding="4px"
              width="auto"
              margin="4px"
              onClick={() => history.push(`/write/${p.id}`)}
            >
              수정
            </StyledButton>
          )}
        </StyledGrid>
      </StyledGrid>
      {p.checkL === "left" && (
        <StyledGrid
          is_flex="flex"
          margin="0 0 2em 0"
          onClick={() => {
            history.push(`/post/${p.id}`);
          }}
        >
          {" "}
          <StyledGrid width="40%">
            <img src={p.post_img} alt="포스트이미지" />
          </StyledGrid>
          <StyledGrid width="60%">
            <StyledText text_align="center">{p.post_text}</StyledText>
          </StyledGrid>
        </StyledGrid>
      )}
      {p.checkL === "right" && (
        <StyledGrid
          is_flex="flex"
          margin="0 0 2em 0"
          onClick={() => {
            history.push(`/post/${p.id}`);
          }}
        >
          <StyledGrid width="60%">
            <StyledText text_align="center">{p.post_text}</StyledText>
          </StyledGrid>
          <StyledGrid width="40%">
            <img src={p.post_img} alt="포스트이미지" />
          </StyledGrid>
        </StyledGrid>
      )}

      {p.checkL === "bottom" && (
        <StyledGrid
          is_flex="flex"
          flex_direction="column"
          margin="0 0 2em 0"
          onClick={() => {
            history.push(`/post/${p.id}`);
          }}
        >
          <StyledGrid width="100%">
            <StyledText text_align="center">{p.post_text}</StyledText>
          </StyledGrid>
          <StyledGrid width="100%">
            <img
              src={p.post_img}
              alt="포스트이미지"
              style={{ width: "100%" }}
            />
          </StyledGrid>
        </StyledGrid>
      )}

      <StyledGrid is_flex="flex">
        <StyledGrid is_flex="flex">
          <StyledText>좋아요{p.like_count}개</StyledText>
          <StyledText>댓글{p.comment_count}개</StyledText>
        </StyledGrid>
        <StyledGrid>
          {p.checked[user_uid] ? (
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "red" }}
              onClick={() => delike(p.id, user_uid)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => like(p.id, user_uid)}
            />
          )}
        </StyledGrid>
      </StyledGrid>
    </StyledGrid>
  );
};

export default PostItem;
