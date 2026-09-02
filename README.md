# DevBoard

DevBoard is a focused project and task management dashboard for keeping personal or small-team delivery organized. It provides a fast, responsive workspace for creating projects, breaking them into tasks, and monitoring progress at a glance.

## Features

- Dashboard with project, task, and completion summaries
- Project creation, search, editing, and deletion
- Project detail pages with task creation and management
- Global task view with search, completion toggling, editing, and deletion
- Automatic progress calculations for every project
- Client-side persistence through `localStorage`
- Responsive layout with a desktop sidebar and mobile-friendly content flow
- Lightweight entrance and hover animations
- Reduced-motion support through `prefers-reduced-motion`
- Accessible form labels, focus states, buttons, and icon tooltips

## Tech Stack

- [React](https://react.dev/) 19
- [React Router](https://reactrouter.com/) 7
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide React](https://lucide.dev/) for interface icons
- [oxlint](https://oxc.rs/docs/guide/usage/linter) for linting

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository, move into the application directory, and install its dependencies:

```bash
git clone <repository-url>
cd devboard
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will provide a local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the Vite development server    |
| `npm run build`   | Creates an optimized production build |
| `npm run preview` | Serves the production build locally   |
| `npm run lint`    | Runs oxlint against the project       |

## Application Routes

| Route           | Purpose                                      |
| --------------- | -------------------------------------------- |
| `/`             | Dashboard overview and active projects       |
| `/projects`     | Project management and project search        |
| `/projects/:id` | Project details and task management          |
| `/tasks`        | Searchable list of tasks across all projects |

## How It Works

1. Open the dashboard to see project totals, task totals, completed tasks, and active projects.
2. Go to **Projects** and choose **New project** to create a project.
3. Open a project to add tasks and manage its task list.
4. Mark tasks as complete to update the project's progress percentage.
5. Use the search fields to filter projects or tasks by name.

Project data is stored in the browser under the `projects` `localStorage` key. There is no backend, account system, or remote database, so data is specific to the current browser and device.

## Data Model

```js
{
	id: "unique-project-id",
	name: "Project name",
	description: "Project description",
	tasks: [
		{
			id: "unique-task-id",
			title: "Task title",
			completed: false
		}
	]
}
```

Progress is calculated from completed tasks. Projects without tasks have `0%` progress.

## Project Structure

```text
src/
├── components/
│   ├── DashboardContent.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectForm.jsx
│   ├── SideBar.jsx
│   ├── SummaryCard.jsx
│   ├── TaskForm.jsx
│   └── TaskItem.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── ProjectDetails.jsx
│   ├── Projects.jsx
│   └── Tasks.jsx
├── App.jsx
├── index.css
└── main.jsx
```

The application state lives in `App.jsx`. Pages own their local search and form state, while reusable visual and interaction patterns are kept in `src/components`.

## Development Notes

- This is a frontend-only application and does not require environment variables.
- `crypto.randomUUID()` is used to generate project and task identifiers.
- Tailwind utility classes provide most of the visual system.
- Global CSS contains the small set of custom entrance animations and reduced-motion rules.
- Browser storage can be cleared from the browser's developer tools to reset the local workspace.

## Roadmap Ideas

- Add a backend and user authentication
- Sync projects between devices
- Add task priorities, due dates, and labels
- Add sorting and filtering by task status
- Add project-level analytics and activity history
- Add automated component and end-to-end tests

## License

This project currently has no declared open-source license. Add a license file before distributing or reusing it publicly.
