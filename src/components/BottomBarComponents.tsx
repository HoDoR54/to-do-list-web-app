import { useTodoListTContext } from "../context";
import { useThemeContext } from "../context";

export const LeftItemsDisplay = ({}) => {
  const [todo, __] = useTodoListTContext();

  const [theme, _] = useThemeContext();

  const activeItems = todo.filter((task) => !task.status);
  return (
    <p
      className={`cursor-pointer ${
        theme
          ? "hover:text-white text-gray-400"
          : "hover:text-black text-gray-500"
      }`}
    >
      {activeItems.length} items left
    </p>
  );
};

export const DeleteAll = () => {
  const [_, setTodoList] = useTodoListTContext();

  const deleteAllTodo = () => {
    setTodoList([]);
    localStorage.setItem("to-do-list", JSON.stringify([]));
  };
  const [theme, __] = useThemeContext();

  return (
    <p
      className={`cursor-pointer ${
        theme
          ? "hover:text-white text-gray-400"
          : "hover:text-black text-gray-500"
      }`}
      onClick={deleteAllTodo}
    >
      delete all
    </p>
  );
};
