import ListItem from "./ListItem";
import { useThemeContext } from "../context";
import { TodoType } from "./AppContainer";

interface ListBoxProps {
  deleteTodo: (index: number) => void;
  filteredList: TodoType[];
}

const ListBox: React.FC<ListBoxProps> = ({ deleteTodo, filteredList }) => {
  const [theme, _] = useThemeContext();

  return (
    <ul className="flex flex-col-reverse w-full gap-1">
      {filteredList.length > 0 ? (
        filteredList.map((task, index) => (
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
