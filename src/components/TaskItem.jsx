import { useState } from "react";
import { Check, Pencil, Trash2 } from "lucide-react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleSaveEdit = () => {
    if (!editTitle.trim()) {
      return;
    }

    onEdit(task.id, task.projectId, editTitle.trim());
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditTitle(task.title);
    setIsEditing(false);
  };

  return (
    <li
      className={`devboard-card-enter devboard-hover-lift group flex items-center gap-4 rounded-2xl border px-5 py-4 transition ${
        task.completed
          ? "border-white/5 bg-slate-950/40"
          : "border-white/10 bg-slate-900/60 hover:border-violet-400/30 hover:bg-slate-900"
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id, task.projectId)}
        className="h-5 w-5 cursor-pointer rounded-md border-white/20 bg-slate-800 text-violet-500 focus:ring-2 focus:ring-violet-500/30"
      />

      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSaveEdit();
              }

              if (event.key === "Escape") {
                handleCancelEdit();
              }
            }}
            autoFocus
            className="w-full rounded-lg border border-violet-400/50 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-violet-500/20"
          />
        ) : (
          <>
            <span
              className={`text-sm font-medium transition ${
                task.completed
                  ? "text-slate-500 line-through"
                  : "text-slate-100"
              }`}
            >
              {task.title}
            </span>

            <p
              className={`mt-1 text-xs ${
                task.completed ? "text-slate-600" : "text-slate-500"
              }`}
            >
              {task.completed ? "Completed" : "In progress"}
            </p>
          </>
        )}
      </div>

      <div className="flex items-center gap-2">
        {isEditing ? (
          <button
            type="button"
            onClick={handleSaveEdit}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-emerald-500/10 hover:text-emerald-400"
            title="Save task"
          >
            <Check size={17} />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white"
            title="Edit task"
          >
            <Pencil size={17} />
          </button>
        )}

        <button
          type="button"
          onClick={() => onDelete(task.id, task.projectId)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
          title="Delete task"
        >
          <Trash2 size={17} />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
