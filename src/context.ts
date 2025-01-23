import { createContext, useContext } from "react";
import { Theme } from "./App";

export const ThemeContext = createContext<Theme | undefined>(undefined);

export function useThemeContext(): Theme {
  const themeUseState = useContext(ThemeContext);

  if (themeUseState === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return themeUseState;
}
