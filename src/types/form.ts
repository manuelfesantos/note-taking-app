export const FormInputTypeEnum = {
  TEXT: "text",
  EMAIL: "email",
  PASSWORD: "password",
} as const;

export type TextInputType =
  (typeof FormInputTypeEnum)[keyof typeof FormInputTypeEnum];

export const ButtonVariantEnum = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  BORDER: "border",
} as const;

export type ButtonVariant =
  (typeof ButtonVariantEnum)[keyof typeof ButtonVariantEnum];

export const ButtonTypeEnum = {
  SUBMIT: "submit",
  BUTTON: "button",
} as const;

export type ButtonType = (typeof ButtonTypeEnum)[keyof typeof ButtonTypeEnum];
