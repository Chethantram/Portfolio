import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Contact from "../components/Contact";
import { FolderOpen, Mail, MoveRight } from "lucide-react";

const ProjectId = () => {
  const url = "https://portfolio-backend-reqo.onrender.com";
  const { id } = useParams();
  const [data, setData] = useState({});
  const [menu, setMenu] = useState("project");

  const getElementById = async () => {
    const response = await axios.get(`${url}/api/project/${id}`);
    if (response.data) {
      setData(response.data.data);
      console.log(response.data.data);
    }
  };
  useEffect(() => {
    getElementById();
    window.scrollTo(0, 0);
  }, []);


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "77931c76-1e95-4bde-88a4-11c7af5dfc6d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Submit Successfully");
      event.target.reset();
    }
    else{
      toast.error("Error");
    }
  };

  return (
    <div  className="text-white   w-full">
      <div className="flex fixed top-0 w-screen  justify-between items-center md:px-10 p-3 bg-[#001524]/80">
        <Link to={'/'} className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-12 h-12" />
          <h2 className="font-bold text-2xl">CTR</h2>
        </Link>
        <div className="flex gap-3 md:gap-5">
          
          
        <a href="#project" onClick={()=>setMenu("project")} className={`${menu==="project"?"border-b-2   border-white ":""}  hover:border-gray-400  hover:border-b-2 flex items-center gap-1`}><FolderOpen className="size-4"/>
            Project
          </a>
          <a href="#contact" onClick={()=>setMenu("contact")} className={`${menu==="contact"?"border-b-2   border-white ":""}  hover:border-gray-400 hover:border-b-2 flex items-center gap-1`}><Mail className="size-4"/>
            Connect With Me
          </a>
        </div>
      </div>
      <div id="project"  className="text-white flex flex-col mx-6 md:mx-0  py-40">
        <img src={`${url}/images/${data.image}`} alt="img" className="w-[350px] h-[350px] object-cover md:w-[700px] md:h-[500px] rounded-md mx-auto" />
        <div className="mx-auto w-[350px]  md:w-[700px] ">

        <h2 className="text-xl font-bold mt-20">1.Project Name</h2>
        <p className="text-md flex items-center gap-2 ml-5"><MoveRight className="size-3"/>{data.name}</p>
        <h2 className="text-xl font-bold mt-10">2.Project Description</h2>
        <p className="text-md project-content ml-5" dangerouslySetInnerHTML={{ __html: data.description }}></p>
        <h2 className="text-xl font-bold mt-10">3.Github Link</h2>
        <a href={data.link} target="_blank" className="text-md text-blue-500 ml-5">{data.link}</a>
        </div>
      </div>

      <Contact/>
    </div>
  );
};

export default ProjectId;
