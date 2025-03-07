
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import React from 'react'

const Header = () => {
  return (
    <div className=' flex flex-col-reverse gap-5 md:mx-10 md:flex md:flex-row  md:justify-evenly items-center pb-20 pt-40'>
        <div className=''>
            <h1 className='text-center md:text-start text-3xl flex flex-col  font-bold text-white'>Hi, I'm <br /><span className='text-6xl text-[#219ebc] font-bold'>Chethan T</span> </h1>
            <h3 className='text-center md:text-start text-white text-2xl font-bold my-2'>and I'm a Full-Stack Developer</h3>
            <p className='text-center md:text-start text-gray-400 mt-5 w-[310px]  md:w-full'>From Frontend Magic to Backend Logic – I Build It All!</p>
            <div className="flex mt-10 gap-5 items-center md:justify-start justify-center">
                <a target='_blank' href="https://github.com/Chethantram"><span><FaGithub className='text-white border-2 w-10 h-10 p-1 rounded-full cursor-pointer'/></span></a>
                <a target='_blank' href="https://www.linkedin.com/in/chethant/"><span><FaLinkedin   className='text-white border-2 w-10 h-10 p-1 rounded-full cursor-pointer'/></span></a>
            </div>
        </div>
        <div className='rounded-full'><img src="/photo1.png" alt="" className=' md:w-[300px] md:h-[450px]  w-[200px] h-[200px] header-img object-cover' /></div>
    </div>
  )
}

export default Header