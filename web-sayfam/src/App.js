import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SwitchMode from "./components/SwitchMode";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <SwitchMode />
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
