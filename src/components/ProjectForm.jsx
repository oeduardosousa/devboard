import { useState } from "react";

function ProjectForm({ onCreateProject }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    const newProject = {
      id: crypto.randomUUID(),
      name: name.trim(),
      description: description.trim(),
      tasks: [],
    };

    onCreateProject(newProject);

    setName("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5"
    >
      <input
        type="text"
        placeholder="Project name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none"
      />

      <textarea
        placeholder="Project description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="min-h-24 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none"
      />

      <button
        type="submit"
        className="rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.5)]"
      >
        Create project
      </button>
    </form>
  );
}

export default ProjectForm;
