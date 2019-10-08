import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: 2px solid #afafaf;
  background-color: #afafaf;
  color: #fff;
  padding: 15px;
  border-radius: 45px;
  transition: all 0.2s;
  &:hover {
    border: 2px solid #9f9f9f;
    background-color: #9f9f9f;
  }
`;

const Submit = ({ children }) => <Container>{children}</Container>;

export default Submit;
