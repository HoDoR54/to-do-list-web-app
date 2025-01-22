import { useState } from "react";
import Box from "./components/Box";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme");
    return currentTheme ? JSON.parse(currentTheme) : true;
  });

  const switchTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);

    localStorage.setItem("theme", JSON.stringify(newTheme));
    console.log(theme);
  };

  return (
    <div
      className={`grid items-center justify-center min-h-screen ${
        theme ? "bg-black" : "bg-white"
      }`}
    >
      <Box theme={theme} switchTheme={switchTheme} />
    </div>
  );
};

export default App;
