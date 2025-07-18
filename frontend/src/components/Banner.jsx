import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';

function Banner() {
  const {user} = useContext(UserDataContext);
  return (
            <div className=' flex  pt-12 sm:px-20 px-8 place-items-center justify-center md:justify-start h-[400px] sm:h-[650px] w-full' 
                        style={{
            backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(17, 17, 17, 0.6)),url("https://i.ibb.co/mVLBCXXp/young-uber-driver-car-interior.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
                     <div className=' flex flex-col justify-center  gap-4 ml-8 sm:pt-8   text-center sm:text-left order-2 sm:order-1   '>
                  <h1 className='text-2xl  lg:w-[70%] sm:text-6xl lg:text-7xl font-bold text-white'>Book a Ride in Seconds</h1>
                  <p className='text-sm  text-yellow-200 py-4 lg:w-[50%]'>Affordable, fast, and safe rides with AR Travels</p>
                  {
                    user ? (
                      <Link to='/user-profile'>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                          Go to Profile
                        </button>
                      </Link>
                    ) : (
                      <Link to='/user-login' > <button className='btn bg-blue-500 shadow-none text-white font-bold rounded-xl py-5 px-8 border hover:bg-transparent border-blue-500 duration-300'>Get Started</button></Link>
                    )
                  }
                     </div>
                     
                     </div>
  )
}

export default Banner