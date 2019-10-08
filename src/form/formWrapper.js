import React, { useState } from "react";
import styled from "styled-components";
import useForm from "./useForm";
import Input from "./input";
import Submit from "./submit";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`;

const FormWrapper = () => {
  const { details, handleChange, handleSubmit } = useForm(login);

  function login() {
    console.log(details);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        handleChange={handleChange}
        value={details.email}
        name="email"
        placeholder="Email Address"
        type="email"
      />
      <Input
        handleChange={handleChange}
        value={details.password}
        name="password"
        placeholder="Password"
        type="password"
      />
      <Submit>Submit</Submit>
    </Form>
  );
};

export default FormWrapper;
