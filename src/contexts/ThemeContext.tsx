import type { Theme } from "@/types/theme.ts";
import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeEnum } from "@/types/theme.ts";

interface ThemeContextProps {
  theme: Theme;
  updateTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeContextProvider: React.FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(ThemeEnum.LIGHT);
  const value = useMemo(
    () => ({
      theme,
      updateTheme: setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextProps => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("Theme context used outside of its scope");
  }

  return theme;
};
