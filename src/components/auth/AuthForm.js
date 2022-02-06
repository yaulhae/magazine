import styled from "styled-components";
import React from "react";
import {
  StyledButton,
  StyledGrid,
  StyledText,
  StyledInput,
} from "../../common";

const AuthForm = ({ auth }) => {
  console.log(auth);
  return (
    <StyledGrid>
      <StyledGrid margin="0 0 2em 0">
        <StyledText size="2rem" bold="600">
          {auth === "login" ? "로그인" : "회원가입"}
        </StyledText>
      </StyledGrid>
      <form>
        <StyledGrid margin="0 0 1em 0">
          <StyledInput
            placeholder="아이디를 입력해주세용!"
            width="100%"
            padding="0.3em"
            is_label="아이디"
            id="Id"
          />
        </StyledGrid>
        <StyledGrid margin="0 0 1em 0">
          {auth === "register" && (
            <StyledInput
              placeholder="닉네임을 입력해주세용!"
              width="100%"
              padding="0.3em"
              is_label="닉네임"
              id="Nickname"
            />
          )}
        </StyledGrid>
        <StyledGrid margin="0 0 1em 0">
          <StyledInput
            placeholder="비밀번호를 입력해주세용!"
            width="100%"
            padding="0.3em"
            is_label="비밀번호"
            id="Password"
          />
        </StyledGrid>
        <StyledGrid margin="0 0 3em 0">
          {auth === "register" && (
            <StyledInput
              placeholder="비밀번호를 다시 입력해주세용!"
              width="100%"
              padding="0.3em"
              is_label="비밀번호 확인"
              id="Repassword"
            />
          )}
        </StyledGrid>
        <StyledButton width="100%" bg="#1B9CFC">
          {auth === "login" ? "로그인하기" : "회원가입하기"}
        </StyledButton>
      </form>
    </StyledGrid>
  );
};

export default AuthForm;
