import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 2px solid #afafaf;
  padding: 15px;
  border-radius: 45px;
  transition: border 0.2s;
  &:focus {
    border: 2px solid #ed7d3a;
  }
`;

const Input = ({ name, placeholder, type, value, handleChange }) => (
  <Container
    name={name}
    type={type}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
  />
);

export default Input;
