import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Objectives from "./components/Objectives";
import ProfessionalSkills from "./components/ProfessionalSkills";
import EducationDetails from "./components/EducationDetails";
import ExperienceDetails from "./components/ExperienceDetails";
import PortfolioDetails from "./components/PortfolioDetails";

function App() {
  return (
    <div className="app">
      <Intro />
      <AboutMe />
      <Objectives />
      <ProfessionalSkills />
      <EducationDetails />
      <ExperienceDetails />
      <PortfolioDetails />
    </div>
  );
}

export default App;
