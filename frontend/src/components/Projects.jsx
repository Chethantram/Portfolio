import React, { useEffect, useState } from "react";
import axios from "axios";
import { FolderOpen, MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const url = "https://portfolio-backend-reqo.onrender.com";
  const getProject = async () => {
    const response = await axios.get(`${url}/api/project/list`);
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div id="projects" className="py-20 md:py-40 px-4 md:px-10 lg:px-20">
      <h2 className="text-4xl font-bold text-white justify-center mb-20 flex items-center gap-3"><FolderOpen className='size-9'/>
        My Latest Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {data.map((project, index) => {
          return (
            <div key={index} className="flex flex-col items-center -z-1 text-white">
              <div className="project-card rounded-md w-full">
                <img
                  src={`${url}/images/${project.image}`}
                  className="project-image w-full h-[250px] object-cover"
                  alt="image"
                />
                <div className="overlay">
                  <h2 className="project-title overflow-ellipsis" onClick={() => navigate(`/project/${project._id}`)}>
                    {project.name}
                    <h2 className="flex items-center gap-3 text-sm cursor-pointer">
                      <span>Show more</span>
                      <span><MoveRight className="size-5" /></span>
                    </h2>
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
