import styled from "styled-components";
import React from "react";
import MagazineTemplate from "../common/MagazineTemplate";
import { StyledButton, StyledGrid, StyledText } from "../common";
import { history } from "../App";

const CautionPage = () => {
  return (
    <MagazineTemplate>
      <StyledGrid margin="100px 0px" padding="16px" text_align="center">
        <StyledText size="32px" bold="600">
          앗! 잠깐!
        </StyledText>
        <StyledText size="16px">로그인 후에만 글을 쓸 수 있어요!</StyledText>
        <StyledButton
          width="100%"
          bg="#1B9CFC"
          onClick={() => {
            history.replace("/login");
          }}
        >
          로그인 하러가기
        </StyledButton>
      </StyledGrid>
    </MagazineTemplate>
  );
};

export default CautionPage;
