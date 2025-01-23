import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold text-white">To-Do</h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;
