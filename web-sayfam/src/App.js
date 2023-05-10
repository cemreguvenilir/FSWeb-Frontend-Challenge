import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SwitchMode from "./components/SwitchMode";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("eng");
  const notify = () => {
    theme === "light"
      ? toast("Switched to dark mode!")
      : toast("Switched to light mode!");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    notify();
  };
  const handleLanguage = () => {
    setLanguage(language === "eng" ? "tr" : "eng");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, handleLanguage }}>
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
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
