import React, { useContext } from 'react'
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiCash } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';

function Riding() {
  const {user,location,vehicle} = useContext(UserDataContext)
   
  return (
    <div  className="h-screen relative overflow-hidden pb-18 ">
        <Link to='/user-profile' className='absolute right-10 top-5 bg-gray-600 text-white p-4 rounded-full cursor-pointer'>
          <FaHome />
        </Link>
            <img className="absolute  w-40" src="../img/logo.png" alt="" />
         
<div className="w-screen h-1/2  ">
      <img src="/img/map.png" alt="" className="w-full h-full object-cover"/>
     </div>
     <div className='h-1/2 p-8'>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
         <img src={vehicle.img} alt="" className="w-15 md:w-20 "/>
         <div>
            <h4 className='text-base'>Sourav</h4>
            <h3 className='text-lg font-medium'>MP04 AB 1234</h3>
            <p className='text-gray-600'>Maruti Suzuki</p>
         </div>
      </div>
                    <div className='flex items-center gap-3 p-5 border-b border-gray-200'>
                        <FaUser/>
                        <h4>{user.fullname.firstname} {user.fullname.lastname}</h4>
                    </div>
                    <div className='flex items-center gap-3 p-5 border-b border-gray-200'>
                         <FaLocationDot/>
                        {
                           location &&
                            <h4>{location.location}</h4>
                        }
                    </div>
                   <div className='flex items-center gap-3  p-5 '>
                          <HiCash className='text-xl'/>
                          <h4>{vehicle.price}</h4>
        
                   </div>
                  <button  
           onClick={()=>setVehicleFound(true)}
           className="bg-blue-500  mt-2 w-full text-stone-100 py-2 px-5 font-medium rounded-xl text-lg cursor-pointer inline-block text-center">
            Make a Payment
           </button>
      
     </div>
    </div>
  )
}

export default Riding