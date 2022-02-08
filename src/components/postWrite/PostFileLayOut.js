import styled from "styled-components";
import React from "react";
import { StyledGrid, StyledText } from "../../common";
import postImg from "../../static/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg";
import { useSelector } from "react-redux";

const PostFileLayOutBlock = styled.div``;

const PostFileLayOut = ({ post }) => {
  const preview = useSelector(({ image }) => image.preview);
  return (
    <PostFileLayOutBlock>
      <StyledGrid margin="0 0 1.6em 0">
        <StyledText size="1.2em" bold="600">
          레이아웃 고르기
        </StyledText>
      </StyledGrid>

      <StyledGrid margin="0 0 2em 0">
        <StyledGrid>
          <input type="radio" id="img_check" />
          <label forhtml="img_check">오른쪽에 이미지 왼쪽에 텍스트</label>
        </StyledGrid>
      </StyledGrid>

      <StyledGrid is_flex="flex" margin="0 0 2em 0">
        <StyledText width="70%" />
        <img
          src={preview ? preview : postImg}
          alt="포스트이미지"
          style={{ width: "30%" }}
        />
      </StyledGrid>

      <StyledGrid margin="0 0 2em 0">
        <StyledGrid>
          <input type="radio" id="img_check" />
          <label forhtml="img_check">왼쪽에 이미지 오른쪽에 텍스트</label>
        </StyledGrid>
      </StyledGrid>

      <StyledGrid is_flex="flex" margin="0 0 2em 0">
        <img
          src={preview ? preview : postImg}
          alt="포스트이미지"
          style={{ width: "30%" }}
        />
        <StyledText width="70%" />
      </StyledGrid>

      <StyledGrid margin="0 0 2em 0">
        <StyledGrid>
          <input type="radio" id="img_check" />
          <label forhtml="img_check" className="label-b">
            하단에 이미지 상단에 텍스트
          </label>
        </StyledGrid>
      </StyledGrid>

      <StyledGrid margin="0 0 2em 0">
        <img
          src={preview ? preview : postImg}
          alt="포스트이미지"
          className="w-100"
        />
      </StyledGrid>
    </PostFileLayOutBlock>
  );
};

export default PostFileLayOut;
