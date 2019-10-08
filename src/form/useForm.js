import { useState, useEffect } from "react";
const useForm = (callback, validate) => {
  const [details, setDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  function handleChange(event) {
    event.persist();
    setDetails(details => ({
      ...details,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(details));
  }

  return { handleChange, handleSubmit, details, errors };
};

export default useForm;
