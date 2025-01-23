import React from "react";

interface BottomBarProps {
  theme: boolean;
}

const BottomBar: React.FC<BottomBarProps> = ({ theme }) => {
  return (
    <div
      className={`flex justify-between w-full px-5 py-2 rounded-md ${
        !theme ? "bg-white text-black shadow" : "bg-slate-800 text-white"
      }`}
    >
      <p>adlfaj;d</p>
      <p>dladfja;dlf</p>
      <p>aldfja;dfj</p>
    </div>
  );
};

export default BottomBar;
