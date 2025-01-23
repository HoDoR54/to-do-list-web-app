import { useThemeContext } from "../context";

const ThemeToggle = () => {
  const [theme, setTheme] = useThemeContext();

  const switchTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <button onClick={switchTheme}>
      {theme ? (
        <i className="fa-regular fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
