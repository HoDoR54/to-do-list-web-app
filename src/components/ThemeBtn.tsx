interface ThemeBtnProps {
  switchTheme: () => void;
  theme: boolean;
}

const ThemeBtn: React.FC<ThemeBtnProps> = ({ theme, switchTheme }) => {
  return (
    <div className="flex gap-4">
      <button
        className="flex items-center justify-center w-10 text-white aspect-square bg-gray-700 rounded-lg"
        onClick={switchTheme}
      >
        {theme && <i className="fa-regular fa-sun"></i>}
        {!theme && <i className="fa-solid fa-moon"></i>}
      </button>
    </div>
  );
};

export default ThemeBtn;
