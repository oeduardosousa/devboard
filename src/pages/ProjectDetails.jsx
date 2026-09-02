import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import Footer from "../components/Footer";

function ProjectDetails({ projects, setProjects }) {
  const navigate = useNavigate();

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

  const handleDeleteTask = (taskId) => {
    setProjects((currentProjects) =>
      currentProjects.map((currentProject) =>
        currentProject.id === id
          ? {
              ...currentProject,
              tasks: currentProject.tasks.filter((task) => task.id !== taskId),
            }
          : currentProject,
      ),
    );
  };

  const handleEditTask = (taskId, newTitle) => {
    setProjects((currentProjects) =>
      currentProjects.map((currentProject) =>
        currentProject.id === id
          ? {
              ...currentProject,
              tasks: currentProject.tasks.map((task) =>
                task.id === taskId
                  ? {
                      ...task,
                      title: newTitle,
                    }
                  : task,
              ),
            }
          : currentProject,
      ),
    );
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#020814] text-slate-100">
      {" "}
      <Header />
      <div className="mx-auto flex w-full max-w-375 gap-6 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <SideBar />

        <div className="flex-1 rounded-4xl border border-white/10 bg-slate-950/50 p-6 shadow-[0_0_80px_rgba(168,85,247,0.12)] md:p-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/70 text-slate-400 transition hover:border-white/20 hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="mb-8">
            <span className="inline-flex rounded-full border border-violet-400/50 bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-violet-200">
              Project
            </span>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-white">
              {project.name}
            </h1>

            <p className="mt-3 max-w-2xl text-slate-300">
              {project.description}
            </p>
          </div>

          <TaskForm onCreateTask={handleCreateTask} />

          <ul className="space-y-3">
            {project.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default ProjectDetails;
