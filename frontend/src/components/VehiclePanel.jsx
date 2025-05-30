import React, { useContext } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { UserDataContext } from '../context/UserContext';

function VehiclePanel({setVehiclePanel,setConfirmRidePanel}) {
  const {vehicle,setVehicle}= useContext(UserDataContext)
     // sample data
  const vehicles = [
    {
      id:1,
      img: '/img/car1.png',
      name: "UberGo",
      user: 4,
      time: 2,
      description: "Affordable, comact rides",
      price: "93.20"
    },
    {
      id:2,
      img: '/img/car2.png',
      name: "Moto",
      user: 3,
      time: 5,
      description: "Affordable, comact rides",
      price: "60.30"
    }
  ]
  return (
    <div>
          <div 
               onClick={()=>setVehiclePanel(false)}
               className="flex justify-center mb-5 p-4 text-gray-400 border-b border-stone-200"><FaChevronDown /></div>
              <h3 className="text-center text-3xl font-semibold mb-4">Choose a Vehicle</h3>
             {
              vehicles.map((vehicle)=>(
                 <div key={vehicle.id} 
                 className="flex items-center gap-4 justify-between border-2 border-gray-200 active:border-black p-3 md:p-5 w-full rounded-2xl mt-4 cursor-pointer"
                 onClick={()=>{
                  setConfirmRidePanel(true)
                  setVehicle(vehicle)
                
                }}
                 >
                <img src={vehicle.img} alt="" className="w-10 md:w-20"/>
              <div>
              <h4 className="flex sm:text-xl font-medium items-center">{vehicle.name} <span className="ml-2 mr-1"><FaUser/></span>{vehicle.user}</h4>
              <h5 className="text-gray-500 font-medium">{vehicle.time} mins away</h5>
              <p className="text-gray-600">{vehicle.description}</p>
             </div>
             <h2 className="font-medium sm:text-xl">${vehicle.price}</h2>
             </div>
              ))
             }
    </div>
  )
}

export default VehiclePanel