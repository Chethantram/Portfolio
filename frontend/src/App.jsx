import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectId from "./pages/ProjectId";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      
        
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project/:id" element={<ProjectId />} />
      </Routes>
      <Footer />
      
    </div>
  );
};

export default App;
