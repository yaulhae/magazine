import styled from "styled-components";
import React from "react";

const MagazineTemplateWrapper = styled.div`
  width: 60%;
  margin: 2em auto;
  padding: 2em;
`;

const MagazineTemplate = ({ children }) => {
  return <MagazineTemplateWrapper>{children}</MagazineTemplateWrapper>;
};

export default MagazineTemplate;
