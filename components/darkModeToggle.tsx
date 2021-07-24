import { Theme, useTheme } from "../utils/theme-context";
import { MoonIcon } from "./icons/moon-icon";
import { SunIcon } from "./icons/sun-icon";

function DarkModeToggle() {
  const [theme, setTheme] = useTheme();
  return (
    <button
      onClick={() => {
        setTheme((previousTheme) =>
          previousTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        );
      }}
      className="inline-flex items-center justify-center p-1 w-14 h-14 text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-full transition"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default DarkModeToggle;
