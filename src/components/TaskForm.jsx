import { useState } from "react";
import { Plus } from "lucide-react";

function TaskForm({ onCreateTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
    };

    onCreateTask(task);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="devboard-intro devboard-intro-delay-2 mb-8 rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-lg"
    >
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white">Add a new task</h2>

        <p className="mt-1 text-sm text-slate-400">
          Create a task for this project.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label
            htmlFor="task-title"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Task title
          </label>

          <input
            id="task-title"
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200 sm:w-auto"
          >
            <Plus size={18} />
            Add task
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
