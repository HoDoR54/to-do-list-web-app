import { useState, useEffect } from "react";
import BottomBar from "./BottomBar";
import Header from "./Header";
import Input from "./Input";
import ListBox from "./ListBox";
import { TodoListContext } from "../context";

export type TodoList = [TodoType[], (newTodoLiist: TodoType[]) => void];
export type TodoType = { task: string; status: boolean };

const AppContainer = () => {
  const [todo, setTodo] = useState<TodoType[]>(() => {
    const currentTodo = localStorage.getItem("to-do-list");
    return currentTodo
      ? JSON.parse(currentTodo)
      : [
          {
            task: "To walk the dog",
            status: false,
          },
          {
            task: "To read for 30 minutes",
            status: false,
          },
          {
            task: "To medidate for an hour",
            status: false,
          },
          {
            task: "To take a nap",
            status: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("to-do-list", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (newTodo: TodoType) => {
    setTodo([...todo, newTodo]);
  };

  const deleteTodo = (index: number) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <section className="z-10 flex flex-col gap-5 max-h-max md:w-[500px] w-[300px]">
      <Header />
      <Input addTodo={addTodo} />
      <ListBox todoList={todo} deleteTodo={deleteTodo} />
      <TodoListContext.Provider value={[todo, setTodo]}>
        <BottomBar todoList={todo} />
      </TodoListContext.Provider>
    </section>
  );
};

export default AppContainer;
