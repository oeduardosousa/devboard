import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Pencil, Trash2 } from "lucide-react";

function ProjectCard({ project, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(project.name);
  const [editDescription, setEditDescription] = useState(project.description);

  const totalTasks = project.tasks.length;
  const completedTasks = project.tasks.filter((task) => task.completed).length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const handleSaveEdit = () => {
    if (!editName.trim() || !editDescription.trim()) {
      return;
    }

    onEdit(project.id, editName.trim(), editDescription.trim());

    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditName(project.name);
    setEditDescription(project.description);
    setIsEditing(false);
  };

  return (
    <article className="devboard-card-enter devboard-hover-lift rounded-3xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-violet-400/30">
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label
              htmlFor={`project-name-${project.id}`}
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Project name
            </label>

            <input
              id={`project-name-${project.id}`}
              type="text"
              value={editName}
              onChange={(event) => setEditName(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label
              htmlFor={`project-description-${project.id}`}
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Description
            </label>

            <textarea
              id={`project-description-${project.id}`}
              value={editDescription}
              onChange={(event) => setEditDescription(event.target.value)}
              rows="3"
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleCancelEdit}
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSaveEdit}
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              <Check size={16} />
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-4">
            <Link to={`/projects/${project.id}`} className="min-w-0 flex-1">
              <h2 className="truncate text-xl font-bold text-white">
                {project.name}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                {project.description}
              </p>
            </Link>

            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white"
                title="Edit project"
              >
                <Pencil size={17} />
              </button>

              <button
                type="button"
                onClick={() => onDelete(project.id)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
                title="Delete project"
              >
                <Trash2 size={17} />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-400">Progress</span>
              <span className="font-semibold text-white">{progress}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-linear-to-r from-fuchsia-500 to-violet-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              {completedTasks} of {totalTasks} tasks completed
            </p>
          </div>
        </>
      )}
    </article>
  );
}

export default ProjectCard;
