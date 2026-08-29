import { useState } from "react";

function TaskForm({ onCreateTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
    };

    onCreateTask(newTask);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/70 p-4 md:flex-row"
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="flex-1 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none"
      />

      <button
        type="submit"
        className="rounded-2xl bg-linear-to-r from-violet-500 to-fuchsia-500 px-5 py-3 font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] transition hover:opacity-95"
      >
        Add task
      </button>
    </form>
  );
}

export default TaskForm;
