import { useThemeContext } from "../context";

const ListFilter = () => {
  const [theme, _] = useThemeContext();

  return (
    <ul className="flex gap-5">
      <li
        className={`cursor-pointer ${
          theme
            ? "hover:text-white text-gray-400"
            : "hover:text-black text-gray-700"
        }`}
      >
        all
      </li>
      <li
        className={`cursor-pointer ${
          theme
            ? "hover:text-white text-gray-400"
            : "hover:text-black text-gray-700"
        }`}
      >
        active
      </li>
      <li
        className={`cursor-pointer ${
          theme
            ? "hover:text-white text-gray-400"
            : "hover:text-black text-gray-700"
        }`}
      >
        completed
      </li>
    </ul>
  );
};

export default ListFilter;
