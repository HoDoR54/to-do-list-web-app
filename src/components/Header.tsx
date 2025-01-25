import ThemeToggle from "./ThemeToggle";
import { useThemeContext } from "../context";

const Header = () => {
  const [theme, _] = useThemeContext();
  return (
    <div className="flex justify-between">
      <h1
        className={`text-3xl font-bold ${theme ? "text-black" : "text-white"}`}
      >
        To-Do
      </h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;
