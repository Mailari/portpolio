import "./App.css";
import Nav from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Work from "./components/work";
import Resume from "./components/resume";
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
    <BrowserRouter>
      <Nav changeTheme={onThemeChange} />
      {theme}
      <Routes>
        <Route path="/" element={Work()}></Route>
        <Route path="/about" element={About()}></Route>
        <Route path="/resume" element={Resume()}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
