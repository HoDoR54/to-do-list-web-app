import { createContext, useContext } from "react";
import { Theme } from "./App";
import { TodoList } from "./components/AppContainer";

export const ThemeContext = createContext<Theme | undefined>(undefined);

export function useThemeContext(): Theme {
  const themeUseState = useContext(ThemeContext);

  if (themeUseState === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return themeUseState;
}

export const TodoListContext = createContext<TodoList | undefined>(undefined);

export function useTodoListTContext(): TodoList {
  const todoListUseState = useContext(TodoListContext);

  if (todoListUseState === undefined) {
    throw new Error("TodoListContext must be used within a Provider");
  }

  return todoListUseState;
}
