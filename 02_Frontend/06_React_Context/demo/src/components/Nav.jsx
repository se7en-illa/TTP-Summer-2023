import { useThemeContext } from "../context/ThemeContext";

export default function Nav() {
  const { toggleTheme, setLight, setDark } = useThemeContext();

  return (
    <nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={setLight}>Light</button>
      <button onClick={setDark}>Dark</button>
    </nav>
  );
}
