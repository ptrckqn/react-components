import { useState } from "react";
const useForm = callback => {
  const [details, setDetails] = useState({});

  function handleChange(event) {
    event.persist();
    setDetails(details => ({
      ...details,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
    if (event) event.preventDefault();
    callback();
  }

  return { handleChange, handleSubmit, details };
};

export default useForm;
