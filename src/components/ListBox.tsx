import React from "react";
import TodoDisplay from "./TodoDisplay";

interface ListBoxProps {
  todoList: string[];
  removeTodo: (index: number) => void;
}

const ListBox: React.FC<ListBoxProps> = ({ todoList, removeTodo }) => {
  const html = (
    <ul className="flex flex-col-reverse">
      {todoList.map((todo: string, index: number) => (
        <TodoDisplay
          task={todo}
          key={index}
          removeTodo={removeTodo}
          index={index}
        />
      ))}
    </ul>
  );
  return <>{todoList.length ? html : "No active to-do"}</>;
};

export default ListBox;
