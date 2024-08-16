import { useRef } from "react";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import useLocalStorage from "use-local-storage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./i18n";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const aboutmeRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

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
        educationRef={educationRef}
      />
      <main>
        <AboutMe ref={aboutmeRef} />
        <Education ref={educationRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
