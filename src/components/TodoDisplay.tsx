import React from "react";

interface TodoDisplayProps {
  task: string;
  index: number;
  removeTodo: (index: number) => void;
}

const TodoDisplay: React.FC<TodoDisplayProps> = ({
  task,
  index,
  removeTodo,
}) => {
  return (
    <li className="relative px-3 grid grid-cols-4 py-2">
      <input type="checkbox" name="" id="" />
      <p className="col-span-3">{task}</p>
      <span
        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => {
          removeTodo(index);
        }}
      >
        X
      </span>
    </li>
  );
};

export default TodoDisplay;
