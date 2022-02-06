import styled from "styled-components";
import React from "react";
import { StyledButton, StyledGrid, StyledText } from "../common";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faDoorOpen, faHome } from "@fortawesome/free-solid-svg-icons";
import StyledImage from "./StyledImage";

const MagazineHeader = ({ onLogin }) => {
  const navigate = useNavigate();
  return (
    <StyledGrid is_flex="flex" margin="0 0 4em 0" width="100%">
      <StyledText size="1.5rem" color="#1B9CFC">
        <FontAwesomeIcon icon={faHome} />
      </StyledText>
      {onLogin ? (
        <StyledGrid is_flex="flex" margin="0 0 0 18em">
          <StyledImage></StyledImage>
          <StyledText bold="600" margin="0 0 0 0">
            야울해님
          </StyledText>
        </StyledGrid>
      ) : (
        ""
      )}
      <StyledGrid is_flex="flex" width="50%">
        <StyledButton
          width="100%"
          bg="#1B9CFC"
          margin="0 0.2em 0 0"
          onClick={() => navigate("/register")}
        >
          {onLogin ? <FontAwesomeIcon icon={faBell} /> : "회원가입"}
        </StyledButton>
        <StyledButton
          width="100%"
          bg="#1B9CFC"
          onClick={() => navigate("/login")}
        >
          {onLogin ? <FontAwesomeIcon icon={faDoorOpen} /> : "로그인"}
        </StyledButton>
      </StyledGrid>
    </StyledGrid>
  );
};

export default MagazineHeader;
