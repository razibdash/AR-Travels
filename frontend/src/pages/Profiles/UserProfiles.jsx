import React, { useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaChevronDown } from "react-icons/fa";

const UserProfiles = () => {
  const [panelOpen, setPenelOpen] = useState(false)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

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

  return <div className="h-screen relative">
     <img className="w-40" src="../img/logo.png" alt="" />
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
      <div ref={panelRef} className="h-0 bg-white">

      </div>
     </div>
  </div>;
};

export default UserProfiles;
