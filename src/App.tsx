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
      className={`relative grid py-[5rem] justify-center min-h-screen ${
        theme ? "bg-slate-950" : "bg-gray-100"
      }`}
    >
      {theme ? (
        <div className="absolute top-0 left-0 right-0">
          <img
            src="../images/bg-desktop-dark.jpg"
            className="hidden w-full h-full md:block"
          />
          <img
            src="../images/bg-mobile-dark.jpg"
            className="block w-full h-full md:hidden"
          />
        </div>
      ) : (
        <div className="absolute top-0 left-0 right-0">
          <img
            src="../images/bg-desktop-light.jpg"
            className="hidden w-full h-full md:block"
          />
          <img
            src="../images/bg-mobile-light.jpg"
            className="block w-full h-full md:hidden"
          />
        </div>
      )}

      <ThemeContext.Provider value={[theme, setTheme]}>
        <AppContainer />
      </ThemeContext.Provider>
    </section>
  );
};

export default App;
