export const TextInputTypeEnum = {
  TEXT: "text",
  EMAIL: "email",
  PASSWORD: "password",
} as const;

export type TextInputType =
  (typeof TextInputTypeEnum)[keyof typeof TextInputTypeEnum];
