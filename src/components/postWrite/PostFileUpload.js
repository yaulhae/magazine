import styled from "styled-components";
import React, { useRef } from "react";
import {
  StyledButton,
  StyledGrid,
  StyledInput,
  StyledText,
} from "../../common";
import { storage } from "../../firebase";
import { setPreview, uploadImageFB } from "../../module/image";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const PostFileUploadBlock = styled.div``;

const PostFileUpload = ({ is_edit }) => {
  const dispatch = useDispatch();
  const is_uploading = useSelector(({ image }) => image.uploading);

  const fileInput = useRef();
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(setPreview(reader.result));
    };
  };

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(uploadImageFB(image));
  };

  return (
    <PostFileUploadBlock>
      <StyledGrid margin="0 0 1.2em 0">
        <StyledText size="2rem" bold="600">
          {is_edit ? "게시글 수정" : "게시글 작성"}
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
            <label htmlFor="fileSearch">파일찾기</label>
            <input
              type="file"
              id="fileSearch"
              style={{ display: "none" }}
              onChange={selectFile}
              ref={fileInput}
              disabled={is_uploading}
            />
          </StyledButton>
        </StyledGrid>
      </StyledGrid>
      <StyledButton
        width="100%"
        bg="#1B9CFC"
        padding="0.3em 0.6em"
        onClick={uploadFB}
      >
        업로드하기
      </StyledButton>
    </PostFileUploadBlock>
  );
};

export default PostFileUpload;
