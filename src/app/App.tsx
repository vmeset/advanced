import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>toggleTheme</button>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;