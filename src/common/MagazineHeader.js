import styled from "styled-components";
import React from "react";
import { StyledButton, StyledGrid, StyledText } from "../common";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faDoorOpen, faHome } from "@fortawesome/free-solid-svg-icons";
import StyledImage from "./StyledImage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut, logoutFB } from "../module/auth";
import { apiKey } from "../firebase";
import Permit from "./Permit";
import { history } from "../App";
import NotiBadge from "./NotiBadge";

const MagazineHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { is_login } = useSelector(({ auth }) => ({
    is_login: auth.is_login,
  }));
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  return (
    <StyledGrid is_flex="flex" margin="0 0 4em 0" width="100%">
      <StyledText size="1.5rem" color="#1B9CFC">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </StyledText>
      <Permit>
        <StyledGrid is_flex="flex" margin="0 0 0 18em">
          <StyledImage></StyledImage>
          <StyledText bold="600" margin="0 0 0 0">
            야울해님
          </StyledText>
        </StyledGrid>
      </Permit>
      <StyledGrid is_flex="flex" width="50%">
        {is_login && is_session ? (
          <StyledButton
            width="100%"
            bg="#1B9CFC"
            margin="0 0.2em 0 0"
            onClick={() => history.push("/noti")}
          >
            <NotiBadge />
          </StyledButton>
        ) : (
          <StyledButton
            width="100%"
            bg="#1B9CFC"
            margin="0 0.2em 0 0"
            onClick={() => history.push("/register")}
          >
            회원가입
          </StyledButton>
        )}
        {is_login && is_session ? (
          <StyledButton
            width="100%"
            bg="#1B9CFC"
            onClick={() => {
              dispatch(logoutFB());
            }}
          >
            <FontAwesomeIcon icon={faDoorOpen} />
          </StyledButton>
        ) : (
          <StyledButton
            width="100%"
            bg="#1B9CFC"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </StyledButton>
        )}
      </StyledGrid>
    </StyledGrid>
  );
};

export default MagazineHeader;
