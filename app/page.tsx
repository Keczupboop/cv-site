"use client";

import { useState } from "react";
import CalculateTemperatureDelta from "./Projects/CalculateTemperatureDelta";
import ProjectsMenu from "./Pages/ProjectsMenu";
import Project from "./Project";
import MenuPanel from "./MenuPanel";
import AboutPage from "./Pages/AboutPage";

const projectsFiles = {
    "CalculateTemperatureDelta": CalculateTemperatureDelta,
};

export type ProjectId =
    | "CalculateTemperatureDelta"

export type Page = "Projekty" | "O stronie" | "null"

export default function Home() {
  const [page, setPage] = useState<Page>("Projekty")

  const [selectedProject, setSelectedProject] =
        useState<ProjectId | null>(null);

  function changePage(selected: Page) {
    setPage(selected)
    setSelectedProject(null)
  }

  function changeProject(project: ProjectId) {
      setSelectedProject(project);
      setPage("null" as Page)
  }

  const SelectedProject =
      selectedProject !== null
          ? projectsFiles[selectedProject]
          : null;

  return (
    <main>
      <MenuPanel page={page} onPageChange={changePage}/>

      {page === "Projekty" && (
        <ProjectsMenu onProjectSelect={changeProject}/>
      )}

      {page === "O stronie" && (
        <AboutPage />
      )}
      
      {SelectedProject && (
        <Project SelectedProject={SelectedProject}/>
      )}
    </main>
  )
}