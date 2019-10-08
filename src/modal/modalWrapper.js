import React from "react";
import styled from "styled-components";
import Modal from "./modal";
import useModal from "./useModal";

const Button = styled.button`
  padding: 15px 30px;
  background-color: #afafaf;
  color: #fff;
  border: none;
  border-radius: 45px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #9f9f9f;
  }
`;

const ModalWrapper = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Button onClick={toggle}>Show Modal</Button>
      <Modal isShowing={isShowing} hide={toggle} />
    </>
  );
};

export default ModalWrapper;
