import React from 'react'
import { motion } from "motion/react"

function WhyChoose() {

    const data = [
            {
              img: "https://i.ibb.co/NgQnPWVk/icons8-last-24-hours-50.png",
              title: "24/7 Availability",
              desc: "Ride anytime, anywhere. We’re always available."
            },
            { 
              img:"https://i.ibb.co/M5N1B5fR/icons8-id-verified-96.png",
              title: "Verified Drivers",
              desc: "Every driver is background-checked and rated by users."
            },
            {
              img:"https://i.ibb.co/MDBgkFCc/icons8-tracking-50.png",
              title: "Real-time Tracking",
              desc: "Track your ride live from pickup to drop-off."
            },
            {
              img:"https://i.ibb.co/sJmDJBQz/icons8-estimate-80.png",
              title: "Affordable Pricing",
              desc: "Transparent pricing with no hidden fees."
            },
            {
              img:"https://i.ibb.co/wF0JHk5f/icons8-sos-64.png",
              title: "Emergency SOS",
              desc: "Safety features for quick help in emergencies."
            },
            {
              img:"https://i.ibb.co/RkfNstZt/save-11523423.png",
              title: "Clean Vehicles",
              desc: "Regularly sanitized vehicles for your comfort and safety."
            }
          ]

  return (
      <motion.section 
            initial={{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             transition={{delay:0.2, duration:1}}
        
        className="md:py-30 md:px-30 py-16 px-5 text-center bg-blue-50">
      
        <h2  className='text-3xl font-semibold '>Why Choose <span className='text-blue-500'>AR Travel</span></h2>
        <p className="text-gray-600 mt-3">Your Comfort, Safety, and Convenience — All in One Ride.</p>
        
        <div className="grid col-span-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 ">
          {data.map((reason, i) => (
            <div key={i} className="card  shadow-sm bg-white rounded-2xl py-4 text-center hover:shadow-md  hover:scale-[1.03] transition-all duration-200">
  
    <img
      src={reason.img}
      alt=""  className='w-20 mx-auto'/>
  
  <div className="card-body">
    <h2 className="card-title flex justify-center">{reason.title}</h2>
    <p className='text-gray-600'>{reason.desc}</p>
    
  </div>
</div>
          ))}
        </div>
      </motion.section>
  )
}

export default WhyChoose