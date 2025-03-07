import { User } from "lucide-react";


const About = () => {
  return (
    <div id='about' className='text-white py-20 md:py-40 px-3 md:px-10 lg:px-20 flex flex-col md:flex-row md:justify-evenly lg:justify-evenly items-center'>
      <div className='hidden lg:block'>
      <div className='rounded-full'><img src="/photo1.png" alt="" className=' mx-auto md:w-[300px] md:h-[450px]  w-[200px] h-[200px] header-img object-cover' /></div>
      </div>
      <div className='flex flex-col gap-6 max-w-[300px] md:max-w-[600px]'>
        <h1 className='text-4xl font-bold text-center md:text-left flex items-center gap-3'><User className='size-9'/>About Me</h1>
        <h4 className='text-2xl font-bold text-[#fb8500]'>Full Stack Web Developer!</h4>
        <p className='text-md'>
          I'm a Full-Stack Web Developer passionate about building scalable, efficient, and user-friendly web applications. With expertise in back-end development, I create seamless digital experiences that merge creativity with functionality.
        </p>
        <p className='text-md'>
          I specialize in modern web technologies like React, Node.js, Express, and MongoDB (MERN stack) and have experience working with databases, APIs and performance optimization.
        </p>
        <div className='flex flex-col gap-4 p-3'>
          <div className='flex items-center'>
            <span className='w-20 text-[#faedcd] font-bold'>React Js</span>
            <div className='h-2 rounded-4xl ml-4 w-full bg-[#a0c4ff]'>
              <div className='h-2 rounded-6xl bg-[#fb8500] animate-react' style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='w-20 text-[#faedcd] font-bold'>Node Js</span>
            <div className='h-2 rounded-4xl ml-4 w-full bg-[#a0c4ff]'>
              <div className='h-2 rounded-6xl bg-[#fb8500] animate-node' style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='w-20 text-[#faedcd] font-bold'>HTML & CSS</span>
            <div className='h-2 rounded-4xl ml-4 w-full bg-[#a0c4ff]'>
              <div className='h-2 rounded-6xl bg-[#fb8500] animate-html' style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='w-20 text-[#faedcd] font-bold'>Next Js</span>
            <div className='h-2 rounded-4xl ml-4 w-full bg-[#a0c4ff]'>
              <div className='h-2 rounded-6xl bg-[#fb8500] animate-next' style={{ width: '70%' }}></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;