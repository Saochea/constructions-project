import React from "react";
import Clock from "../date-time/Clock";
import Dates from "../date-time/Dates";

const Navbar = () => {
  return (
    <div className="flex h-14 bg-[#35589A] items-center justify-between font-bold text-slate-300">
      <div className="ml-6">Dashboard</div>
      <div className="flex">
        <Clock />
        <Dates />
      </div>
      <div className="mr-6">Admin</div>
    </div>
  );
};

export default Navbar;
