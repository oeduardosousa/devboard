function Tasks({ projects, search }) {
  const tasks = (projects || []).flatMap((project) =>
    project.tasks.map((task) => ({
      ...task,
      projectName: project.name,
      projectId: project.id,
    })),
  );

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-[#020814] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-slate-950/50 p-6 md:p-8">
        <h1 className="mb-6 text-4xl font-black tracking-tight text-white">
          Tasks
        </h1>

        <ul className="space-y-3">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3"
              >
                <span
                  className={
                    task.completed
                      ? "text-slate-400 line-through"
                      : "text-white"
                  }
                >
                  {task.title}
                </span>
                <small className="text-slate-400">{task.projectName}</small>
              </li>
            ))
          ) : (
            <li className="rounded-2xl border border-dashed border-white/15 bg-slate-900/60 p-6 text-slate-300">
              No tasks found.
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}

export default Tasks;
