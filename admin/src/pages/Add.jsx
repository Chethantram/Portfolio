import {useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProject = ({url}) => {
    
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        link:""
    });

    const onChangeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
    }
    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('link', data.link);
        formData.append('image',image);
        const response = await axios.post(`${url}/api/project/add-project`,formData);
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                link:""
            });
            setImage(false);
            toast.success(response.data.message);
            
        }
        else{
            toast.error(response.data.message);
        }
    }
   
  return (
    <div className=' mt-2 ml-2 md:p-13 w-[80%] '>
        <h2 className='text-2xl font-bold md:pb-5'>Add Project</h2>
        <form className='flex flex-col gap-8 my-10 md:my-0 mx-7 md:mx-0' onSubmit={onSubmitHandler}>
 
        <div className="add-images flex flex-col gap-4">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img className='cursor-pointer bg-contain w-20' src={image ? URL.createObjectURL(image):'/upload_area.png'} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' name="image" hidden required />
        </div>
        <div className="add-name flex flex-col gap-3 w-[70vw] md:w-md">
            <p>Project Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" className='outline-none border-2 border-gray-400 h-10 p-4 rounded-lg' required placeholder='Name here' name='name' />
        </div>
        <div className="add-description flex flex-col gap-3">
            <p>Project Description</p>
            <textarea  onChange={onChangeHandler} value={data.description} rows="6" className='outline-none border-2 w-[70vw] md:w-md border-gray-400 p-4 rounded-lg' required placeholder='Write the comment here' name='description'></textarea>
        </div>
        
        <div className="add-link flex flex-col gap-3 w-[70vw] md:w-md">
            <p>Project Link</p>
            <input onChange={onChangeHandler} value={data.link} type="text" className='outline-none border-2 border-gray-400 h-10 p-4 rounded-lg' required placeholder='Link here' name='link' />
        </div>
            
        
        <button className='text-center cursor-pointer  text-white rounded-md bg-orange-600 h-10 max-w-25' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddProject