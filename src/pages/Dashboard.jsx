import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import DashboardContent from "../components/DashboardContent";
import Footer from "../components/Footer";

function Dashboard({ projects, search, onSearch }) {
  return (
    <div className="min-h-screen bg-[#020814] text-slate-100">
      <Header onSearch={onSearch} />

      <div className="mx-auto flex w-full max-w-[1500px] flex-1 gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <DashboardContent projects={projects} search={search} />
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
