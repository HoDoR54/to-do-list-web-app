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
      className={`relative pl-5 text-sm sm:text-base py-2 pr-10 flex rounded-md ${
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
        <span>{task.task}</span>
      ) : (
        <del className="text-gray-500">{task.task}</del>
      )}

      <span
        className="absolute transform -translate-y-1/2 cursor-pointer right-3 top-1/2 hover:scale-105 active:scale-100"
        onClick={() => deleteTodo(index)}
      >
        <i className="w-4 text-blue-700 fa-regular fa-circle-xmark"></i>
      </span>
    </li>
  );
};

export default ListItem;
