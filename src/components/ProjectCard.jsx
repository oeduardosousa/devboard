import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

function ProjectCard({ project, onDelete }) {
  const totalTasks = project.tasks.length;
  const completedTasks = project.tasks.filter((task) => task.completed).length;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_15px_40px_rgba(15,23,42,0.6)]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-2 py-1 text-xs text-violet-200">
          {progress}%
        </span>
      </div>

      <p className="mb-4 text-sm leading-6 text-slate-300">
        {project.description}
      </p>

      <div className="mb-3 h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-between gap-3 text-sm text-slate-400">
        <span>
          {completedTasks} / {totalTasks} tasks
        </span>
        <span>Active</span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Link
          to={`/projects/${project.id}`}
          className="flex-1 rounded-xl bg-violet-500/15 px-3 py-2 text-center font-medium text-violet-200 transition hover:bg-violet-500/25"
        >
          Open project
        </Link>
        <button
          type="button"
          onClick={() => onDelete(project.id)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-200 transition hover:bg-red-500/20"
          aria-label={`Delete ${project.name}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
