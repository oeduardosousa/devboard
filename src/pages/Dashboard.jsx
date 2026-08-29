import { useState } from "react";

import Header from "../components/Header";

function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header onSearch={setSearch} />
    </>
  );
}

export default Dashboard;
