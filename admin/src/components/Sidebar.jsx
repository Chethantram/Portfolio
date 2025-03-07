import { CirclePlus, List } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='md:w-[18%] min-h-screen border-2 text-white bg-[#001219] border-white'>
        <NavLink to={'/'} className="flex items-center gap-2 border-b-2 border-white p-2">
        <img src="/logo.svg" alt="logo" className="w-12 h-12 " />
        <h2 className="font-bold text-2xl hidden md:block">CTR</h2>
      </NavLink>
      <div className='w-full py-40 flex flex-col gap-7 items-end justify-end '>
        <Link to={'/add'} className='flex gap-3 items-center p-2 justify-center border-2 border-r-0 border-white w-[85%] '>
            <CirclePlus className='w-10 h-10'/>
            <span className='hidden lg:block'>Add Project</span>
        </Link>
        

       <Link to={'/list'} className='flex gap-3 items-center p-2 justify-center border-2 border-r-0 border-white w-[85%] '>
            <List className='w-10 h-10'/>
            <span className='hidden lg:block'>List Project</span>
        </Link>
        
      </div>

    </div>
  )
}

export default Sidebar