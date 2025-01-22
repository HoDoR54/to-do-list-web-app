import ThemeBtn from "./ThemeBtn";
import ListBox from "./ListBox";
import TodoInput from "./TodoInput";
import { useState } from "react";

interface BoxProps {
  switchTheme: () => void;
  theme: boolean;
}

const Box: React.FC<BoxProps> = ({ theme, switchTheme }) => {
  const [todos, setTodo] = useState(() => {
    const currentTodoList = localStorage.getItem("to-do-list");
    return currentTodoList ? JSON.parse(currentTodoList) : [];
  });

  const addTodo = (newToDo: string) => {
    const newTodoList = [...todos, newToDo];
    setTodo(newTodoList);
    localStorage.setItem("to-do-list", JSON.stringify(newTodoList));
  };

  const removeTodo = (idx: number) => {
    const newTodoList = todos.filter((_: any, index: number) => index !== idx);
    setTodo(newTodoList);
    localStorage.setItem("to-do-list", JSON.stringify(newTodoList));
  };

  return (
    <section className="bg-blue-200 p-5 flex flex-col gap-3 min-w-[40vw] min-h-[80vh]">
      <header className="flex justify-between items-center gap-5">
        <h1 className="text-2xl font-bold space-x-3">To-Do</h1>
        <ThemeBtn theme={theme} switchTheme={switchTheme} />
      </header>
      <TodoInput addTodo={addTodo} />
      <ListBox removeTodo={removeTodo} todoList={todos} />
    </section>
  );
};

export default Box;
