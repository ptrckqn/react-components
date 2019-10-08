import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: none;
  visibility: hidden;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: #afafaf;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  ${Input}:checked + & {
    background: ${props => props.colour};
  }
  &:hover {
    background-color: #9f9f9f;
  }
`;

const Button = styled.span`
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${Input}:checked + ${Label} & {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

const Toggle = ({ isOn, handleToggle, colour }) => (
  <>
    <Input id="toggle" type="checkbox" checked={isOn} onChange={handleToggle} />
    <Label htmlFor="toggle" colour={colour}>
      <Button />
    </Label>
  </>
);

export default Toggle;
