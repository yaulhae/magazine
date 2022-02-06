import styled from "styled-components";
import React from "react";
import MagazineTemplate from "../common/MagazineTemplate";
import MagazineHeader from "../common/MagazineHeader";
import AuthForm from "../components/auth/AuthForm";

const LoginPageBlock = styled.div``;

const LoginPage = () => {
  return (
    <MagazineTemplate>
      <LoginPageBlock>
        <MagazineHeader />
        <AuthForm auth="login" />
      </LoginPageBlock>
    </MagazineTemplate>
  );
};

export default LoginPage;
