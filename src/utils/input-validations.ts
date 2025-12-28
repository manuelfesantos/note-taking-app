export const validatePassword = (password: string): (string | undefined)[] => {
  const errors: string[] = [];
  if (password.length < 8)
    errors.push("Password should have at least 8 characters");
  return errors;
};

export const validateEmail = (email: string): (string | undefined)[] => {
  const errors: string[] = [];
  const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  if (!emailRegex.test(email)) {
    errors.push("Invalid email");
  }
  return errors;
};
