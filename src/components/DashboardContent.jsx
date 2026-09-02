import SummaryCard from "./SummaryCard";
import ProjectCard from "./ProjectCard";

function DashboardContent({ projects, search, onSearch, onDeleteProject }) {
  const filteredProjects = (projects || []).filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalTasks = (projects || []).reduce(
    (total, project) => total + project.tasks.length,
    0,
  );

  const completedTasks = (projects || []).reduce(
    (total, project) =>
      total + project.tasks.filter((task) => task.completed).length,
    0,
  );

  return (
    <main className="flex-1 rounded-4xl border border-white/10 bg-slate-950/50 p-6 md:p-8">
      <section className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white">
            Dashboard
          </h1>

          <p className="mt-3 text-slate-300">
            Keep an overview of your projects and track team delivery.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-fuchsia-500"
        />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <SummaryCard title="Projects" value={projects.length} />
        <SummaryCard title="Tasks" value={totalTasks} />
        <SummaryCard title="Completed" value={completedTasks} />
      </section>

      <section className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Active projects</h2>
          <span className="text-sm text-slate-400">
            {filteredProjects.length} results
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDelete={onDeleteProject}
              />
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-white/15 bg-slate-900/60 p-10 text-center text-slate-300 lg:col-span-2">
              No projects yet. Add a project to start tracking progress.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default DashboardContent;
