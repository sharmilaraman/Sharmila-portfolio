import * as React from "react";
import Main from "./components/Main";
import Projects from "./components/projects";
import Skills from './components/skills'
import About from './components/about'
import ContactPage from './components/contact'
export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <ContactPage />
    </div>
  );
}
