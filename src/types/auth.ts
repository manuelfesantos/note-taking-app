export const AuthTypeEnum = {
  LOGIN: "login",
  SIGNUP: "signup",
  FORGOT_PASSWORD: "forgot-password",
  RESET_PASSWORD: "reset-password",
} as const;

export type AuthType = (typeof AuthTypeEnum)[keyof typeof AuthTypeEnum];
