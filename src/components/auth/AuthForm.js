import React, { useState } from "react";
import {
  StyledButton,
  StyledGrid,
  StyledText,
  StyledInput,
} from "../../common";
import { setCookie } from "../../common/Cookie";
import { logIn, loginAction, loginFB, signupFB } from "../../module/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailCheck } from "../../common/regCheck";

const AuthForm = ({ auth }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd_check, setPwdCheck] = useState("");
  const [user_name, setUserName] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (id === "" || pwd === "") {
      return;
    }
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    dispatch(loginFB(id, pwd));
  };

  const register = (e) => {
    e.preventDefault();
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    dispatch(signupFB(id, pwd, user_name));
  };

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
            onChange={(e) => {
              setId(e.target.value);
            }}
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
              onChange={(e) => {
                setUserName(e.target.value);
              }}
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
            type="password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
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
              type="passsword"
              onChange={(e) => {
                setPwdCheck(e.target.value);
              }}
            />
          )}
        </StyledGrid>
        {auth === "login" ? (
          <StyledButton
            width="100%"
            bg="#1B9CFC"
            onClick={login}
            disabled={id === "" || pwd === "" ? true : false}
          >
            로그인하기
          </StyledButton>
        ) : (
          <StyledButton width="100%" bg="#1B9CFC" onClick={register}>
            회원가입하기
          </StyledButton>
        )}
      </form>
    </StyledGrid>
  );
};

export default AuthForm;
