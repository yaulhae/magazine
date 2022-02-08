import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "../firebase";
import { produceWithPatches } from "immer";

const PermitBlock = styled.div``;

const Permit = ({ children }) => {
  const is_login = useSelector((state) => state.auth.user);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  if (is_session && is_login) {
    return <PermitBlock>{children}</PermitBlock>;
  }
  return null;
};

export default Permit;
