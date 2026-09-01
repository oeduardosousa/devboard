import { useState } from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TaskItem from "../components/TaskItem";

function Tasks({ projects, setProjects }) {
  const [search, setSearch] = useState("");

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

  const handleToggleTask = (taskId, projectId) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId
                  ? {
                      ...task,
                      completed: !task.completed,
                    }
                  : task,
              ),
            }
          : project,
      ),
    );
  };

  const handleDeleteTask = (taskId, projectId) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project,
      ),
    );
  };

  const handleEditTask = (taskId, projectId, newTitle) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId
                  ? {
                      ...task,
                      title: newTitle,
                    }
                  : task,
              ),
            }
          : project,
      ),
    );
  };

  return (
    <main className="min-h-screen bg-[#020814] text-white">
      <Header />

      <div className="mx-auto flex w-full max-w-375 gap-6 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <SideBar />

        <div className="flex-1 rounded-4xl border border-white/10 bg-slate-950/50 p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white">
                Tasks
              </h1>

              <p className="mt-3 text-slate-300">
                Manage and track all your tasks across projects.
              </p>
            </div>

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-fuchsia-500"
            />
          </div>

          <ul className="mt-8 space-y-3">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                  onEdit={handleEditTask}
                />
              ))
            ) : (
              <li className="rounded-3xl border border-dashed border-white/15 bg-slate-900/60 p-10 text-center text-slate-300">
                No tasks found.
              </li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Tasks;
