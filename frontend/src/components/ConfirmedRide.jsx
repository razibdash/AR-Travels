import React, { useContext } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiCash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UserDataContext } from '../context/UserContext';

function ConfirmedRide({setConfirmRidePanel,setVehicleFound}) {
  const {user} = useContext(UserDataContext)
 
  return (
    <div>
         <div  
         onClick={()=>setConfirmRidePanel(false)}
              className="flex justify-center mb-5 p-4 text-gray-400 border-b border-stone-200">
               <FaChevronDown />
        </div>
             <h3 className="text-center text-3xl font-semibold mb-4">Confirm Your Ride</h3>
            <img src="/img/car1.png" alt="" className="w-10 md:w-50 mx-auto"/>
            <div>
            <div className='flex items-center gap-3 p-5 border-b border-gray-200'>
                <FaUser/>
                <h4>{user.fullname.firstname} {user.fullname.lastname}</h4>
            </div>
            <div className='flex items-center gap-3 p-5 border-b border-gray-200'>
                 <FaLocationDot/>
                 <h4>Metropolitan University,Bateshwar, Sylhet-3104, Bangladesh</h4>
            </div>
           <div className='flex items-center gap-3  p-5 '>
                  <HiCash className='text-xl'/>
                  <h4>$93.20</h4>

           </div>
          <Link to="/riding">
           <button  
           onClick={()=>setVehicleFound(true)}
           className="bg-blue-500 mt-2 w-full text-stone-100 py-2 px-5 font-medium rounded-xl text-lg cursor-pointer inline-block text-center">
            Confirm
           </button>
          </Link>
            </div>
             
    </div>
  )
}

export default ConfirmedRide