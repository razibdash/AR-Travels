import React from 'react'
import { motion } from "motion/react"


function HowItWorks() {
   
  return (
       <motion.section 
       initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{delay:0.2, duration:1}}
        
       
       className="md:py-30 md:px-30 py-16 px-5 text-center ">
        <h3 className='text-3xl font-semibold '>How It <span className='text-blue-500'>Works</span></h3>
        <p className="text-gray-600 mt-3">From booking to arrival, our process is quick and easy</p>

        <div className='flex flex-col md:flex-row justify-center  items-center md:gap-30 gap-5 md:mt-20 mt-10'>
            <div className='md:border-r-2 border-gray-200 md:p-20'>
                <h2 className='font-bold text-4xl'>Step 1</h2>
                <h3 className='text-2xl font-medium mt-2'>Request a Ride</h3>
                 <p className="text-gray-600 md:w-90 mt-4">Enter your pickup and drop-off locations in the app to find a nearby driver instantly.</p>
            </div>
        <motion.img 
        animate={{y:[0,20,0]}}
        transition={{duration:4, repeat:Infinity}}
        src="https://i.ibb.co/Lzb2kRFw/7607041-3644592.jpg" alt="" className='w-[400px]'/>
        </div>

        <motion.div 
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{delay:0.1, duration:1}}
        className='flex flex-col md:flex-row  justify-center items-center md:gap-30 gap-5 mt-20'>
              <motion.img 
        animate={{y:[0,20,0]}}
        transition={{duration:4, repeat:Infinity}} src="https://i.ibb.co/Qjmy86zb/7546977-3671751.jpg" alt="" className='w-[450px]  order-2 md:order-1'/>
            <div className='md:border-l-2 order-1 md:order-2 border-gray-200 md:p-20'>
                <h2 className='font-bold text-4xl'>Step 2</h2>
                <h3 className='text-2xl font-medium mt-2'>Get Matched</h3>
                 <p className="text-gray-600 md:w-90 mt-4">We connect you with the nearest available driver based on your location and ride type.</p>
            </div>
       
        </motion.div>

        <motion.div 
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{delay:0.1, duration:1}} 
        className='flex flex-col md:flex-row justify-center items-center md:gap-30 gap-5 mt-20'>
            <div className='md:border-r-2 border-gray-200 md:p-20'>
                <h2 className='font-bold text-4xl'>Step 3</h2>
                <h3 className='text-2xl font-medium mt-2'>Track & Arrive</h3>
                 <p className="text-gray-600 md:w-90 mt-4">Track your ride in real-time and arrive safely at your destination. Enjoy the journey!</p>
            </div>
         <motion.img 
        animate={{y:[0,20,0]}}
        transition={{duration:4, repeat:Infinity}} src="https://i.ibb.co/ksffmT5N/7372901-3643906.jpg" alt="" className='w-[450px]'/>
        </motion.div>

      </motion.section>

)
}

export default HowItWorks
