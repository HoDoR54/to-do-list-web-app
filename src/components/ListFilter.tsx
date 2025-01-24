// import { useState } from "react";

interface ListFilterProps {
  theme: boolean;
}

const ListFilter: React.FC<ListFilterProps> = ({ theme }) => {
  //   const [filter, setFilter] = useState("all");

  //   const allFilter = () => {};

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
