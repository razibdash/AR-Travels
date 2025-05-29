import React, { useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaChevronDown } from "react-icons/fa";
import LocationSearchPanel from "../../components/LocationSearchPanel";
import VehiclePanel from "../../components/VehiclePanel";
import ConfirmedRide from "../../components/ConfirmedRide";

const UserProfiles = () => {
  const [panelOpen, setPenelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRideRef = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const pickup = e.target.pickup.value;
    const destination = e.target.destination.value
  }

 

  useGSAP(() => {
	if(panelOpen){
    gsap.to(panelRef.current,{
         height: '70%',
    });
    gsap.to(panelCloseRef.current,{
      opacity: 1
    })
  }
  else{
    gsap.to(panelRef.current,{
         height: '0%',
    });
    gsap.to(panelCloseRef.current,{
        opacity:0
    })
  }
},[panelOpen]);

 useGSAP(() => {
	if(vehiclePanel){
    gsap.to(vehiclePanelRef.current,{
    transform: 'translateY(0)'
  })
  }
  else{
    gsap.to(vehiclePanelRef.current,{
    transform: 'translateY(100%)'
  })
  }
},[vehiclePanel]);

useGSAP(() => {
	if(confirmRidePanel){
    gsap.to(confirmedRideRef.current,{
    transform: 'translateY(0)'
  })
  }
  else{
    gsap.to(confirmedRideRef.current,{
    transform: 'translateY(100%)'
  })
  }
},[confirmRidePanel]);


  return <div className="h-screen relative overflow-hidden">
     <img className="absolute  w-40" src="../img/logo.png" alt="" />
     <div className="w-screen h-screen">
      <img src="/img/map.png" alt="" className="w-full h-full object-cover"/>
     </div>
     <div className="absolute top-0   w-full flex flex-col justify-end h-screen ">
      <div className="h-[30%]  bg-white  sm:px-20 py-5 px-8 ">
        <div ref={panelCloseRef} className="flex justify-end" onClick={()=>setPenelOpen(false)}>
          <FaChevronDown  />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Find a Trip</h3>
      <form onSubmit={handleSubmit}>

        <input type="text" name="pickup" 
        onClick={()=>setPenelOpen(true)} 
        className="bg-gray-200 p-2 rounded-md w-full"
        placeholder="Add a pick-up location"/>
       <br />
        <input type="text" name="destination" 
        onClick={()=>setPenelOpen(true)} 
        className="bg-gray-200 p-2 rounded-md mt-3 w-full"
        placeholder="Enter your destination"/>
      </form>
      </div>
      <div ref={panelRef} className="h-0 bg-white px-20 py-4">
         <LocationSearchPanel setPenelOpen={setPenelOpen} setVehiclePanel={setVehiclePanel}/>
      </div>
     </div>

     <div className="fixed z-10 bottom-0 p-5 md:px-20 bg-white w-full py-8 " ref={vehiclePanelRef}>
     <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
  </div>

  <div className="fixed z-10 bottom-0 p-5 md:px-20 bg-white w-full py-8  " ref={confirmedRideRef}>
     <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel}/>
  </div>
  </div>
};

export default UserProfiles;
