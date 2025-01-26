import { TodoType } from "./AppContainer";
import { useThemeContext } from "../context";
import { useTodoListTContext } from "../context";

interface ListItemProps {
  task: TodoType;
  index: number;
  deleteTodo: (index: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ task, index, deleteTodo }) => {
  const [theme, _] = useThemeContext();
  const [todo, setTodo] = useTodoListTContext();

  const updateTodoStatus = (idx: number) => {
    const newTodo = [...todo];
    newTodo[idx].status = !newTodo[idx].status;
    setTodo(newTodo);
  };

  return (
    <li
      className={`relative px-5 text-sm sm:text-base py-2 flex rounded-md ${
        !theme ? "bg-white text-black shadow" : "bg-slate-800 text-white"
      }`}
    >
      <div className="w-[2rem] flex items-center">
        {!task.status ? (
          <span
            className="w-4 h-4 border-2 border-blue-700 rounded-full cursor-pointer hover:scale-105 active:scale-100"
            onClick={() => {
              updateTodoStatus(index);
            }}
          ></span>
        ) : (
          <span
            className="w-4 h-4 bg-blue-300 border-2 border-blue-700 rounded-full cursor-pointer hover:scale-105 active:scale-100"
            onClick={() => {
              updateTodoStatus(index);
            }}
          ></span>
        )}
      </div>
      {!task.status ? (
        <span className="flex-1 pr-3">{task.task}</span>
      ) : (
        <del className="flex-1 pr-3 text-gray-500">{task.task}</del>
      )}

      <span
        className="cursor-pointer hover:scale-105 active:scale-100"
        onClick={() => deleteTodo(index)}
      >
        <i className="w-4 text-blue-700 fa-regular fa-circle-xmark"></i>
      </span>
    </li>
  );
};

export default ListItem;
