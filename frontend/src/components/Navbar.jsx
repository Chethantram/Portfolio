import React, { useState } from "react";
import { Briefcase, FolderOpen, House, Mail, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home")
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between fixed w-[100%] items-center py-3 text-white bg-[#001524]/80 z-10 px-3 md:px-10">
      <Link to={'/'} className="flex items-center gap-2 cursor-pointer">
        <img src="/logo.svg" alt="logo" className="w-12 h-12" />
        <h2 className="font-bold text-2xl">CTR</h2>
      </Link>
        <div className="absolute right-5 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="cursor-pointer" />
          </button>
        </div>
      <div>
        <ul className={`absolute cursor-pointer md:static top-16 right-0 bg-[#001524] md:bg-transparent p-4 md:p-0 rounded-lg shadow-lg md:shadow-none flex flex-col md:flex-row items-center gap-6 font-medium transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}>
          <a href="/" onClick={()=>setMenu("Home")} className={`${menu==="Home"?"border-b-2   border-white":""}  hover:border-gray-400 hover:border-b-2 flex items-center gap-1`}><House className="size-4"/>
            Home
          </a>
          <a href="#about" onClick={()=>setMenu("About")} className={`${menu==="About"?"border-b-2  border-white ":""}  hover:border-gray-400 hover:border-b-2 flex items-center gap-1`}><User className="size-4"/>
            About
          </a>
          <a href="#services" onClick={()=>setMenu("Services")} className={`${menu==="Services"?"border-b-2   border-white ":""}  hover:border-gray-400  hover:border-b-2 flex items-center gap-1`}><Briefcase className="size-4"/>
            Services
          </a>
          <a href="#projects" onClick={()=>setMenu("Project")} className={`${menu==="Project"?"border-b-2   border-white ":""}  hover:border-gray-400  hover:border-b-2 flex items-center gap-1`}><FolderOpen className="size-4"/>
            Project
          </a>
          <a href="#contact" onClick={()=>setMenu("Contact")} className={`${menu==="Contact"?"border-b-2   border-white ":""}  hover:border-gray-400 hover:border-b-2 flex items-center gap-1`}><Mail className="size-4"/>
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
