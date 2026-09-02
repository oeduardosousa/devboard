# DevBoard

A modern project and task management dashboard built with React.

DevBoard was created as a practical React project to manage projects, organize tasks, track completion, and visualize project progress through a clean and responsive interface.

## 🚀 Live Demo

**[Open DevBoard](https://devboard-tan-phi.vercel.app/)**

## ✨ Features

- 📊 Dashboard with project and task statistics
- 📁 Create, edit, search, and delete projects
- 📝 Create, edit, complete, and delete tasks
- 🔎 Search projects and tasks
- 📈 Automatic project progress calculation
- 💾 Data persistence with `localStorage`
- 📱 Responsive interface
- 🧭 Client-side navigation with React Router
- 🎨 Dark UI built with Tailwind CSS
- ⚡ Fast development and production builds with Vite

## 🛠️ Tech Stack

- **React**
- **JavaScript**
- **React Router**
- **Tailwind CSS**
- **Vite**
- **Lucide React**
- **localStorage**

## 📸 About the Project

DevBoard is a frontend project focused on practicing React concepts in a real-world application.

The application allows users to create projects and break them down into individual tasks. Each project automatically calculates its completion percentage based on the number of completed tasks.

All application data is stored locally in the browser, so the project does not require a backend, database, or authentication system.

## 🧠 React Concepts Used

This project was built to practice and reinforce several React concepts, including:

- Components and component composition
- Props
- `useState`
- `useEffect`
- Controlled inputs
- Event handling
- Conditional rendering
- Lists and `map()`
- State lifting
- Shared state between pages
- React Router
- Data persistence with `localStorage`

## 📂 Project Structure

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
│
├── pages/
│   ├── Dashboard.jsx
│   ├── ProjectDetails.jsx
│   ├── Projects.jsx
│   └── Tasks.jsx
│
├── App.jsx
├── index.css
└── main.jsx
