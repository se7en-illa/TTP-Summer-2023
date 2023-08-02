import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <div id="app" className={theme}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
