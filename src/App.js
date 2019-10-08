import React from "react";
import styled from "styled-components";
import ToggleWrapper from "./toggle/toggleWrapper";
import ModalWrapper from "./modal/modalWrapper";
import FormWrapper from "./form/formWrapper";

const Container = styled.div`
  margin: 0 auto;
  padding: 10rem;
  display: grid;
  grid-auto-rows: max-content;
  grid-row-gap: 50px;
  justify-items: center;
`;

function App() {
  return (
    <Container>
      <ToggleWrapper />
      <ModalWrapper />
      <FormWrapper />
    </Container>
  );
}

export default App;
