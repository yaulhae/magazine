import styled from "styled-components";
import React from "react";

const StyledInputBlock = styled.input`
  width: ${(props) => (props.width ? props.width : "")};
  font-size: ${(props) => (props.font_size ? props.font_size : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  border: 2px solid #25ccf7;
  border-radius: 4px;
  &:focus {
    border: 2px solid rgb(27, 156, 252);
    outline: none;
  }
`;

const StyledInput = (props) => {
  const { width, padding, font_size, placeholder, is_label, id } = props;
  const styles = {
    width: width,
    padding: padding,
    font_size: font_size,
  };
  return (
    <>
      {is_label && <label htmlFor={id}>{is_label}</label>}
      <StyledInputBlock {...styles} placeholder={placeholder} id={id} />
    </>
  );
};

StyledInput.defaultProps = {
  placeholder: false,
  width: "",
  padding: false,
  font_size: false,
  is_label: false,
  id: null,
};
export default StyledInput;
