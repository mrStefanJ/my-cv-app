import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import Header from "./components/Header/Header";
import { Projects } from "./components/Projects";
import useLocalStorage from "use-local-storage";
import { Skills } from "./components/Skills";
import { useRef } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutmeRef = useRef(null);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Header
        theme={theme}
        onClick={switchTheme}
        contactRef={contactRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        aboutmeRef={aboutmeRef}
      />
      <main>
        <AboutMe ref={aboutmeRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
