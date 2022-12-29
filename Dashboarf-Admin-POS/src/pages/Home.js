import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Dashboard/>
      </div>
    </>
  );
};

export default Home;
