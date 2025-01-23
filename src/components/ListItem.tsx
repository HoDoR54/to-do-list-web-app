import React from "react";

interface ListItemProps {
  task: string;
  index: number;
  deleteTodo: (index: number) => void;
  theme: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  task,
  index,
  deleteTodo,
  theme,
}) => {
  return (
    <li
      className={`relative px-5 py-2 rounded-md ${
        !theme ? "bg-white text-black shadow" : "bg-slate-800 text-white"
      }`}
    >
      {task}
      <span
        className="absolute transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
        onClick={() => {
          deleteTodo(index);
        }}
      >
        X
      </span>
    </li>
  );
};

export default ListItem;
