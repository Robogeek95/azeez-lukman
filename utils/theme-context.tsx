import * as React from "react";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}
const themes: Array<Theme> = Object.values(Theme);

type ThemeContextType = [
  Theme | null,
  React.Dispatch<React.SetStateAction<Theme | null>>
];

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);
ThemeContext.displayName = "ThemeContext";

const prefersLightMQ = "(prefers-color-scheme: light)";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme | null>(() => {
    // there's no way for us to know what the theme should be in this context
    // the client will have to figure it out before hydration.
    if (typeof window !== "object") return null;

    return window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK;
  });

  const mountRun = React.useRef(false);

  React.useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }

    const searchParams = new URLSearchParams([
      ["_data", "routes/_action/set-theme"],
    ]);
    void fetch(`/_action/set-theme?${searchParams}`, {
      method: "POST",
      body: JSON.stringify({ theme }),
    });
  }, [theme]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.LIGHT : Theme.DARK);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

/**
 * This allows you to render something that depends on the theme without
 * worrying about whether it'll SSR properly when we don't actually know
 * the user's preferred theme.
 */
function Themed({
  dark,
  light,
}: {
  dark: React.ReactNode | string;
  light: React.ReactNode | string;
}) {
  const [theme] = useTheme();
  const serverRenderWithUnknownTheme = !theme && typeof window !== "object";
  if (serverRenderWithUnknownTheme) {
    // stick them both in and our little script will update the DOM to match
    // what we'll render in the client during hydration.
    return (
      <>
        {React.createElement("dark-mode", null, dark)}
        {React.createElement("light-mode", null, dark)}
      </>
    );
  } else {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{theme === "light" ? light : dark}</>;
  }
}

const sessionKey = "theme";

export {
  ThemeProvider,
  useTheme,
  sessionKey,
  themes,
  Theme,
  Themed,
};
