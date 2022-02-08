import styled from "styled-components";
import React from "react";
import { StyledGrid, StyledImage, StyledText } from "../../common";
import { history } from "../../App";

const CardBlock = styled.div``;

const Card = (props) => {
  const { image_url, user_name, post_id } = props.n;
  console.log(props.n);
  return (
    <CardBlock>
      <StyledGrid
        padding="16px"
        is_flex="flex"
        bg="#ffffff"
        margin="10px 0"
        text_align="left"
        onClick={() => {
          history.push(`/detail/${post_id}`);
        }}
      >
        <StyledGrid width="auto" margin="0px 8px 0px 0px">
          <StyledImage size="125px" shape="square" src={image_url} />
        </StyledGrid>
        <StyledGrid>
          <StyledText>
            <b style={{ fontWeight: "bold" }}>{user_name}</b>님이 게시글에
            댓글을 남겼습니다.
          </StyledText>
        </StyledGrid>
      </StyledGrid>
    </CardBlock>
  );
};

Card.defaultProps = {
  image_url: "",
  user_name: "",
  post_id: null,
};

export default Card;
