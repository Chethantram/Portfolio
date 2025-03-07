import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Route,Routes} from 'react-router-dom'

import List from './pages/List'
import AddProject from './pages/add'
import { ToastContainer } from 'react-toastify'


const App = () => {
  const url= 'http://localhost:3000';
  return (
    <div className='flex'>
      <ToastContainer/>
      <Sidebar/>
      <div className='flex flex-col w-[100%]'>
      <Navbar/>

      <Routes>
        <Route path='/add' element={<AddProject url={url}/>}/>
        <Route path='/list' element={<List url={url}/>}/>
      </Routes>
      </div>


    </div>
  )
}

export default App