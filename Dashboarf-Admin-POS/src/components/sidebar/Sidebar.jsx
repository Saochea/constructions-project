import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiHome3Fill } from "react-icons/ri";
import { FaSellcast } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`flex-2 ${
        open ? "w-56" : "w-12"
      } bg-[#404258] h-auto scrollbar relative duration-200`}
    >
      <ul className=" pt-2 text-gray-300 mt-24">
        <Link to="/">
          <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline">
            <span className="text-xl block float-left">
              <RiHome3Fill color="white" />
            </span>
            <span
              className={`text-base font-medium flex-1 ${
                !open && "hidden"
              } duration-200 mt-[2px]`}
            >
              Dashboard
            </span>
          </li>
        </Link>
        <Link to="/sale">
        <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline">
          <span className="text-xl block float-left">
            <FaSellcast color="white" />
          </span>
          <span
            className={`text-base font-medium flex-1 ${
              !open && "hidden"
            } duration-200 mt-[2px]`}
          >
            Sale
          </span>
        </li>
        </Link>
        <Link to="/category">
          <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline">
            <span className="text-xl block float-left">
              <BiCategoryAlt color="white" />
            </span>
            <span
              className={`text-base font-medium flex-1 ${
                !open && "hidden"
              } duration-200 mt-[2px]`}
            >
              Category
            </span>
          </li>
        </Link>
      </ul>
      <div
        className="absolute top-6 right-[14px] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <AiOutlineMenu size={24} color="white" />
      </div>
    </div>
  );
};

export default Sidebar;
