import { useThemeContext } from "../context";

const filters: string[] = ["all", "active", "completed"];

const ListFilter = () => {
  const [theme, _] = useThemeContext();

  return (
    <ul className="flex gap-5">
      {filters.map((filter) => (
        <li
          className={`cursor-pointer ${
            theme
              ? "hover:text-white text-gray-400"
              : "hover:text-black text-gray-500"
          }`}
        >
          <span>{filter}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListFilter;
