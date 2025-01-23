import React from "react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  theme: boolean;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
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
