import React from 'react'
import { motion } from "motion/react"

function About() {
  return (
          <motion.section 
                 initial={{opacity:0, y:50}}
                  whileInView={{opacity:1, y:0}}
                  transition={{delay:0.2, duration:1}}

        className="py-10 sm:py-20 ">
      
         <h3 className='text-3xl font-semibold  text-center '>About <span className='text-blue-500'>AR Travel</span></h3>
         <div className='bg-fixed  bg-center bg-cover h-[600px] sm:h-[500px] mt-10 bg-no-repeat'  
         style={{ backgroundImage: "url('https://i.ibb.co/FbdRRw32/2149184229.jpg')" }}>
          
          <div className='px-10  bg-blue-300   opacity-70  py-20  shadow-lg lg:w-[70%] h-full sm:rounded-tr-full '>
           
         <p className="text-base w-full sm:w-[70%] ">
          AR Travel is a modern ride-sharing platform built to connect riders and drivers seamlessly. Whether you're heading to work, catching a flight, or exploring the city, our mission is to make your journey safe, reliable, and affordable. With cutting-edge technology, verified drivers, and a strong focus on customer satisfaction, AR Travel is here to transform urban transportation in Bangladesh.
        </p>
        <p className="text-base w-full sm:w-[70%] mt-4">
          We are committed to redefining the ride experience by prioritizing punctuality, driver professionalism, and user-friendly features. Our app makes it effortless to book a ride, get real-time updates, and access customer support. We constantly innovate to ensure your comfort and security, whether you’re commuting daily or planning a long trip. AR Travel isn’t just about getting you from point A to B—it’s about creating a trusted travel companion.
        </p>
        
          </div>

         </div>
      
            
      </motion.section >
  )
}

export default About