import styled from "styled-components";
import React from "react";
import MagazineTemplate from "../common/MagazineTemplate";
import MagazineHeader from "../common/MagazineHeader";
import { StyledButton, StyledGrid, StyledInput, StyledText } from "../common";
import postImg from "../static/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg";

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
  return (
    <MagazineTemplate>
      <PostWritePageBlock>
        <MagazineHeader onLogin={true} />
        <StyledGrid margin="0 0 1.2em 0">
          <StyledText size="2rem" bold="600">
            게시글 작성
          </StyledText>
        </StyledGrid>

        <StyledGrid is_flex="flex" margin="0 0 0.6em 0">
          <StyledInput
            placeholder="사진을 선택해주세용!"
            padding="0.3em"
            width="25%"
          />
          <StyledGrid>
            <StyledButton
              bg="#1B9CFC"
              width="4em"
              font_size="0.7rem"
              padding="0.3em 0.6em"
            >
              <label forhtml="fileSearch">파일찾기</label>
            </StyledButton>
            <input type="file" id="fileSearch" style={{ display: "none" }} />
          </StyledGrid>
        </StyledGrid>

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
          <img src={postImg} alt="포스트이미지" />
        </StyledGrid>

        <StyledGrid margin="0 0 2em 0">
          <StyledGrid>
            <input type="radio" id="img_check" />
            <label forhtml="img_check">왼쪽에 이미지 오른쪽에 텍스트</label>
          </StyledGrid>
        </StyledGrid>

        <StyledGrid is_flex="flex" margin="0 0 2em 0">
          <img src={postImg} alt="포스트이미지" />
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
          <img src={postImg} alt="포스트이미지" className="w-100" />
        </StyledGrid>

        <StyledGrid>
          <StyledText size="0.8em" margin="0 0 0.5em 0">
            게시물 내용
          </StyledText>
          <textarea placeholder="게시글 작성"></textarea>
          <StyledButton width="100%" bg="#1B9CFC">
            게시글 작성
          </StyledButton>
        </StyledGrid>
      </PostWritePageBlock>
    </MagazineTemplate>
  );
};

export default PostWritePage;
