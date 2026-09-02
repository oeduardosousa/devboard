import Header from "../components/Header";
import SideBar from "../components/SideBar";
import DashboardContent from "../components/DashboardContent";
import Footer from "../components/Footer";

function Dashboard({ projects, search, onSearch, onDeleteProject }) {
  return (
    <main className="flex min-h-screen flex-col bg-[#020814] text-slate-100">
      <Header />

      <div className="mx-auto flex w-full max-w-375 flex-1 gap-6 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <SideBar />

        <DashboardContent
          projects={projects}
          search={search}
          onSearch={onSearch}
          onDeleteProject={onDeleteProject}
        />
      </div>

      <Footer />
    </main>
  );
}

export default Dashboard;
