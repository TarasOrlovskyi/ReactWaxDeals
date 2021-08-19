export const required = value => (value ? undefined : "Required field");

export const maxLength = max => value =>
  value.length > max ? `Must be ${max} characters or less` : undefined;

export const emailValidation = value =>
  !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
    ? "You have entered an invalid email address!"
    : undefined;

export const passwordValidation = value =>
  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
    ? "Password must be at least 8 characters long and contain numbers, lowercase and uppercase letters"
    : undefined;