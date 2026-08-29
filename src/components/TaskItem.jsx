function TaskItem({ task, onToggle }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="h-4 w-4 rounded border-violet-400 bg-slate-800 text-violet-500 focus:ring-violet-500"
      />

      <span
        className={`text-sm ${task.completed ? "text-slate-400 line-through" : "text-white"}`}
      >
        {task.title}
      </span>
    </li>
  );
}

export default TaskItem;
