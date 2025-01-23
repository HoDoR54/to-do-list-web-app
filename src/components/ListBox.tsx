import React from "react";
import ListItem from "./ListItem";

interface ListBoxProps {
  todoList: string[];
  deleteTodo: (index: number) => void;
  theme: boolean;
}

const ListBox: React.FC<ListBoxProps> = ({ todoList, deleteTodo, theme }) => {
  return (
    <ul className="flex flex-col-reverse w-full gap-1">
      {todoList.length > 0 ? (
        todoList.map((task, index) => (
          <ListItem
            task={task}
            index={index}
            deleteTodo={deleteTodo}
            theme={theme}
            key={index}
          />
        ))
      ) : (
        <div
          className={`flex items-center justify-center px-5 py-2 rounded-md min-h-[50vh] ${
            !theme ? "bg-white text-black" : "bg-slate-800 text-white"
          }`}
        >
          No active to-do in the list.
        </div>
      )}
    </ul>
  );
};

export default ListBox;
