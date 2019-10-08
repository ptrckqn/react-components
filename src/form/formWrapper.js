import React from "react";
import styled from "styled-components";
import useForm from "./useForm";
import validate from "./formValidationRules";
import Input from "./input";
import Submit from "./submit";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`;

const Error = styled.span`
  color: red;
`;

const FormWrapper = () => {
  const { details, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log(details);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        handleChange={handleChange}
        value={details.email || ""}
        name="email"
        placeholder="Email Address"
        type="email"
      />
      {errors.email && <Error>{errors.email}</Error>}
      <Input
        handleChange={handleChange}
        value={details.password || ""}
        name="password"
        placeholder="Password"
        type="password"
      />
      <Submit>Submit</Submit>
    </Form>
  );
};

export default FormWrapper;
