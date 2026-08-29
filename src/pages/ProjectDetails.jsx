import { useParams } from "react-router-dom";

import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

function ProjectDetails({ projects, setProjects }) {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020814] text-white">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </main>
    );
  }

  const handleCreateTask = (task) => {
    setProjects((currentProjects) =>
      currentProjects.map((currentProject) =>
        currentProject.id === id
          ? {
              ...currentProject,
              tasks: [...currentProject.tasks, task],
            }
          : currentProject,
      ),
    );
  };

  const handleToggleTask = (taskId) => {
    setProjects((currentProjects) =>
      currentProjects.map((currentProject) =>
        currentProject.id === id
          ? {
              ...currentProject,
              tasks: currentProject.tasks.map((task) =>
                task.id === taskId
                  ? {
                      ...task,
                      completed: !task.completed,
                    }
                  : task,
              ),
            }
          : currentProject,
      ),
    );
  };

  return (
    <main className="min-h-screen bg-[#020814] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-slate-950/50 p-6 shadow-[0_0_80px_rgba(168,85,247,0.12)] md:p-8">
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-violet-400/50 bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-violet-200">
            Project
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">{project.description}</p>
        </div>

        <TaskForm onCreateTask={handleCreateTask} />

        <ul className="space-y-3">
          {project.tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={handleToggleTask} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ProjectDetails;
