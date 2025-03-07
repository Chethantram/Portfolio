import React from 'react'
import { Blend, Briefcase, Component, Server } from 'lucide-react'

const Services = () => {
  return (
    <div id='services' className='flex flex-col gap-14 px-7 md:px-10 py-20 md:py-40 text-white'>
      <h2 className='mx-auto text-4xl font-bold text-[#dce9fd] flex items-center gap-3'><Briefcase className='size-9'/>My Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-10 md:gap-10'>
        <div className='border-2 border-white p-5 flex flex-col gap-4 rounded-lg'>
          <span><Blend className='size-10 text-[#219ebc]' /></span>
          <h2 className='text-xl font-bold'>UI/UX Design</h2>
          <p>With a deep understanding of user psychology, design principles, and modern tools, I create seamless interfaces that enhance usability and engagement.</p>
        </div>
        <div className='border-2 border-white p-5 flex flex-col gap-4 rounded-lg'>
          <span><Component className='size-10 text-[#219ebc]' /></span>
          <h2 className='text-xl font-bold'>Web Design</h2>
          <p>It combines design, programming, and problem-solving to build seamless, interactive, and efficient online experiences.</p>
        </div>
        <div className='border-2 border-white p-5 flex flex-col gap-4 rounded-lg'>
          <span><Server className='size-10 text-[#219ebc]' /></span>
          <h2 className='text-xl font-bold'>Backend Design</h2>
          <p>Specializing in server-side logic, database management, and API integration to ensure robust and scalable applications.</p>
        </div>
      </div>
    </div>
  )
}

export default Services