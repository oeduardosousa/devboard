import SummaryCard from "./SummaryCard";
import ProjectCard from "./ProjectCard";

function DashboardContent({ projects, search, onDeleteProject }) {
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
    <main className="flex-1 rounded-4xl border border-white/10 bg-slate-950/30 p-5 shadow-[0_0_80px_rgba(168,85,247,0.18)] backdrop-blur-sm md:p-8">
      <section className="mb-10 rounded-3xl border border-white/10 bg-linear-to-r from-[#10192f] via-[#121d31] to-[#1a1026] p-8">
        <span className="inline-flex rounded-full border border-violet-400/50 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">
          DevBoard 2026
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-none tracking-tight text-white md:text-6xl">
          Project management that coaches you along the way.
        </h1>
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
