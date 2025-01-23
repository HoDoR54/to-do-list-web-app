import { useState, useEffect } from "react";
import BottomBar from "./BottomBar";
import Header from "./Header";
import Input from "./Input";
import ListBox from "./ListBox";

interface AppContainerProps {
  theme: boolean;
}

const AppContainer: React.FC<AppContainerProps> = ({ theme }) => {
  const [todo, setTodo] = useState<string[]>(() => {
    const currentTodo = localStorage.getItem("to-do-list");
    return currentTodo
      ? JSON.parse(currentTodo)
      : [
          "To walk the dog",
          "To read for 30 minutes",
          "To meditate for an hour",
          "To take a nap",
        ];
  });

  useEffect(() => {
    localStorage.setItem("to-do-list", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (newTodo: string) => {
    setTodo([...todo, newTodo]);
  };

  const deleteTodo = (index: number) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <section className="z-10 flex flex-col gap-5 max-h-max md:w-[500px]">
      <Header theme={theme} />
      <Input addTodo={addTodo} theme={theme} />
      <ListBox todoList={todo} deleteTodo={deleteTodo} theme={theme} />
      <BottomBar theme={theme} />
    </section>
  );
};

export default AppContainer;
