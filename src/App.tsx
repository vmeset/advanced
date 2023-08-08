import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/main/Main.async";
import { AboutPageAsync } from "./pages/about/About.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>toggleTheme</button>
      <hr />
      <Link to={"/"}>main</Link>. .<Link to={"/about"}>about</Link>
      <hr />
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
