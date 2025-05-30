import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiCash } from "react-icons/hi";

function LookingForDriver({setVehicleFound}) {
  return (
    <div>
         <div  
                 onClick={()=>setVehicleFound(false)}
                      className="flex justify-center mb-5 p-4 text-gray-400 border-b border-stone-200">
                       <FaChevronDown />
                </div>
                     <h3 className="text-center text-3xl font-semibold mb-4">Looking for a Driver</h3>
                    <img src="/img/car1.png" alt="" className="w-10 md:w-50 mx-auto"/>
                    <div>
                    <div className='flex items-center gap-3 p-5 border-b border-gray-200'>
                        <FaUser/>
                        <h4>Mughni Rayhan Tisha</h4>
                    </div>
                    <div className='flex items-center gap-3 p-5 border-b border-gray-200'>
                         <FaLocationDot/>
                         <h4>Metropolitan University,Bateshwar, Sylhet-3104, Bangladesh</h4>
                    </div>
                   <div className='flex items-center gap-3  p-5 '>
                          <HiCash className='text-xl'/>
                          <h4>$93.20</h4>
        
                   </div>
                  
                    </div>
    </div>
  )
}

export default LookingForDriver