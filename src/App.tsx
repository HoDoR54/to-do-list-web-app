import { useState } from "react";
import AppContainer from "./components/AppContainer";
import { ThemeContext } from "./context.ts";

export type Theme = [boolean, (newTheme: boolean) => void];

const App = () => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem("theme");
    return currentTheme ? JSON.parse(currentTheme) : true;
  });

  return (
    <section
      className={`relative grid pt-[5rem] justify-center min-h-screen ${
        theme ? "bg-slate-950" : "bg-white"
      }`}
    >
      {theme ? (
        <img
          src="../images/bg-desktop-dark.jpg"
          className="absolute top-0 left-0 right-0 w-full"
        />
      ) : (
        <img
          src="../images/bg-desktop-light.jpg"
          className="absolute top-0 left-0 right-0 w-full"
        />
      )}

      <ThemeContext.Provider value={[theme, setTheme]}>
        <AppContainer />
      </ThemeContext.Provider>
    </section>
  );
};

export default App;
