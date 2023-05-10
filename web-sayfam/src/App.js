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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, setTheme] = useState("light");
  const notify = () => {
    theme === "light"
      ? toast("Switched to dark mode!")
      : toast("Switched to light mode!");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    notify();
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
      <ToastContainer />
    </ThemeContext.Provider>
  );
}

export default App;
