import { useState } from "react";

import Header from "../components/Header";
import ProjectForm from "../components/ProjectForm";
import ProjectCard from "../components/ProjectCard";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

function Projects({ projects, setProjects }) {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const handleCreateProject = (project) => {
    setProjects((currentProjects) => [...currentProjects, project]);

    setShowForm(false);
  };

  const handleDeleteProject = (projectId) => {
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== projectId),
    );
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleEditProject = (projectId, newName, newDescription) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              name: newName,
              description: newDescription,
            }
          : project,
      ),
    );
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#020814] text-white">
      {" "}
      <Header />
      <div className="mx-auto flex w-full max-w-375 flex-1 gap-6 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        {" "}
        <SideBar />
        <div className="flex-1 rounded-4xl border border-white/10 bg-slate-950/50 p-6 md:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white">
                Projects
              </h1>

              <p className="mt-3 text-slate-300">
                Manage your workspace and track team delivery with a focused
                view.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-fuchsia-500"
              />

              <button
                type="button"
                onClick={() => setShowForm(!showForm)}
                className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                + New project
              </button>
            </div>
          </div>

          {showForm && (
            <div className="mt-8">
              <ProjectForm onCreateProject={handleCreateProject} />
            </div>
          )}

          <section className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onDelete={handleDeleteProject}
                  onEdit={handleEditProject}
                />
              ))
            ) : (
              <div className="rounded-3xl border border-dashed border-white/15 bg-slate-900/60 p-10 text-center text-slate-300 md:col-span-2">
                No projects found.
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Projects;
