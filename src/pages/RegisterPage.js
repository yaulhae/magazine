import styled from "styled-components";
import React from "react";
import MagazineTemplate from "../common/MagazineTemplate";
import AuthForm from "../components/auth/AuthForm";
import MagazineHeader from "../common/MagazineHeader";

const RegisterPageBlock = styled.div``;

const RegisterPage = () => {
  return (
    <MagazineTemplate>
      <RegisterPageBlock>
        <MagazineHeader />
        <AuthForm auth="register" />
      </RegisterPageBlock>
    </MagazineTemplate>
  );
};

export default RegisterPage;
