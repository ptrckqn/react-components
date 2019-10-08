import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #efefef;
  padding: 30px;
  width: 500px;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  background-color: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;
  padding: 0;
  span {
    &::before,
    &::after {
      content: "";
      height: 2px;
      width: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #afafaf;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;

const Body = styled.p``;

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <Overlay>
            <Wrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
              <Header>
                This is the header
                <Button data-dismiss="modal" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true" />
                </Button>
              </Header>
              <Body>Hello, I'm a modal</Body>
            </Wrapper>
          </Overlay>
        </>,
        document.body
      )
    : null;

export default Modal;
