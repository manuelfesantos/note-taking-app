export const ThemeEnum = {
  DARK: "dark",
  LIGHT: "light",
} as const;

export type Theme = (typeof ThemeEnum)[keyof typeof ThemeEnum];
