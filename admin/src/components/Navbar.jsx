import { CircleUserRound } from 'lucide-react'


const Navbar = () => {
  return (
    <nav className='bg-[#001219]  h-16 flex justify-between px-10 text-white  items-center'>
        <div>Admin Panel</div>
        <div>
          <CircleUserRound/>
        </div>
    </nav>
  )
}

export default Navbar