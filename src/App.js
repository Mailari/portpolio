import "./App.css";
import Nav from "./components/nav";
import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import Work from "./components/work";
import Blog from "./components/blog";
import { useEffect, useState } from "react";
function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "true" ? true : false
  );

  const updateColors = () => {
    if (theme) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "rgb(46, 45, 45)";
      document.body.style.color = "white";
    }
  };

  useEffect(() => updateColors());

  const onThemeChange = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
    updateColors();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Nav changeTheme={onThemeChange} color={theme} />}
      >
        <Route path="" element={About()}></Route>
        <Route path="work" element={Work()}></Route>
        <Route path="blog" element={Blog()}></Route>
        <Route path="*" element={<div>404 Page not Found</div>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
