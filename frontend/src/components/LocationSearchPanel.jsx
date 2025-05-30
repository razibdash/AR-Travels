import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function LocationSearchPanel({setPenelOpen,setVehiclePanel}) {
 const locations = [
         {
            id:1,
            location: "Metropolitan University,Bateshwar, Sylhet-3104, Bangladesh"
         },
         {
            id:2,
            location: "Metropolitan University,Bateshwar, Sylhet-3104, Bangladesh"
         },
         {
            id:3,
            location: "Metropolitan University,Bateshwar, Sylhet-3104, Bangladesh"
         },
         {
            id:4,
            location: "Metropolitan University,Bateshwar, Sylhet-3104, Bangladesh"
         },
    ]
  return (
    <div >
       {
        locations.map((location)=>(
             <div key={location.id} className='flex items-center justify-start w-full gap-2 mb-3 p-4 rounded-xl border border-gray-200 active:border-gray-700 cursor-pointer'
             onClick={()=>{
                setVehiclePanel(true)  
                setPenelOpen(false)
             }}
            
             >
            <div className='bg-gray-200 p-2 rounded-full'><FaLocationDot/></div>
            <h4 className='text-sm sm:text-base'>{location.location}</h4>
        </div>
        ))
       }
    </div>
  )
}

export default LocationSearchPanel