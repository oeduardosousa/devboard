import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Tasks from "./pages/Tasks";

function App() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");

    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  const [search, setSearch] = useState("");

  const handleDeleteProject = (projectId) => {
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== projectId),
    );
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <div className="min-h-screen bg-[#020814] text-slate-100">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                projects={projects}
                search={search}
                onSearch={setSearch}
                onDeleteProject={handleDeleteProject}
              />
            }
          />

          <Route
            path="/projects"
            element={<Projects projects={projects} setProjects={setProjects} />}
          />

          <Route
            path="/projects/:id"
            element={
              <ProjectDetails projects={projects} setProjects={setProjects} />
            }
          />

          <Route
            path="/tasks"
            element={<Tasks projects={projects} setProjects={setProjects} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
