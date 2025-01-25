import ListItem from "./ListItem";
import { useThemeContext, useTodoListTContext } from "../context";

interface ListBoxProps {
  deleteTodo: (index: number) => void;
}

const ListBox: React.FC<ListBoxProps> = ({ deleteTodo }) => {
  const [theme, _] = useThemeContext();
  const [todo, __] = useTodoListTContext();

  return (
    <ul className="flex flex-col-reverse w-full gap-1">
      {todo.length > 0 ? (
        todo.map((task, index) => (
          <ListItem
            task={task}
            index={index}
            deleteTodo={deleteTodo}
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
