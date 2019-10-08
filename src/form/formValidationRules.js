export default function validate(details) {
  let errors = {};
  if (!details.email) {
    errors.email = "Please enter your email";
  } else if (!/\S+@\S+\.\S+/.test(details.email)) {
    errors.email = "Please enter a valid email";
  }
  return errors;
}
