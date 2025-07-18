import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';

function Navbar() {
  const {user} = useContext(UserDataContext);
  console.log(user)
  return (
    <div className='w-full'>
        <div className="navbar bg-white shadow-sm sm:px-12 px-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
   <div className="w-40 ">
          <img src="../img/logo.png" alt="" />
        </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base font-semibold">
        <li><a className='hover:text-yellow-500 duration-200'>Home</a></li>
        <li><a className='hover:text-yellow-500 duration-200'>About</a></li>
        <li><a className='hover:text-yellow-500 duration-200'>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
   {
    !user ?
     <Link to='/user-login'><button className="btn sm:bg-blue-500 sm:text-white text-blue-500   sm:border sm:border-blue-500 hover:bg-white hover:text-blue-500  duration-200 cursor-pointer ">
        Login
    </button></Link>

    :

    
      <button className="btn sm:bg-blue-500 sm:text-white text-blue-500   sm:border sm:border-blue-500 hover:bg-white hover:text-blue-500  duration-200 cursor-pointer ">
        Logout
      </button>
   }
    </div>
  </div>
</div>
  )
}

export default Navbar