import { useState } from "react";

import ProjectForm from "../components/ProjectForm";
import ProjectCard from "../components/ProjectCard";

function Projects({ projects, setProjects, search }) {
  const [showForm, setShowForm] = useState(false);

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

  return (
    <main className="min-h-screen bg-[#020814] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-4xl border border-white/10 bg-slate-950/50 p-6 md:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white">
              Projects
            </h1>

            <p className="mt-3 text-slate-300">
              Manage your workspace and track team delivery with a focused view.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            + New project
          </button>
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
              />
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-white/15 bg-slate-900/60 p-10 text-center text-slate-300 md:col-span-2">
              No projects found.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Projects;
