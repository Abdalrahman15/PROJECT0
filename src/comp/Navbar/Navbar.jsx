import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import SunAndMoonProvider, { SunAndMoon } from '../../Context/SunAndMoon.jsx'
import Du from "../../assets/images/dumbl.webp"
export default function Navbar() {

  const [toggle, setToggle] = useState(true)
  const [dropdown, setDropDwon] = useState(true)
  const { togglex ,setTogglex } = useContext(SunAndMoon)
  
  

  let nav = useNavigate()


  
  function logOut(){
    localStorage.removeItem("token")
    nav("/login")
  }




  








  return <>


<nav className=" border-gray-200  fixed w-full bg-black z-[999] ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div to="#" className="flex flex-wrap items-center space-x-3 rtl:space-x-reverse  lg:w-1/3 md:w-auto ">
    <i class="fa-solid fa-dumbbell text-white text-3xl"></i>
      <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">Project Test</span>
    </div>
    
    <button onClick={()=>setToggle(!toggle)} data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-200  z-[999999999999]" aria-controls="navbar-multi-level" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>

    <div className={toggle==true? "hidden  lg:w-1/2 md:w-auto md:block   " :"  w-full md:block md:w-auto" }id="navbar-multi-level">
      <ul className="lg:gap-10 md:gap-7  flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-black">
       
        <div className='flex flex-col font-medium p-4 md:p-0    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-black'>
        <li className='bg-black'>
          <NavLink to="home" className=" block py-2 px-3 text-white rounded-sm aria-[current=page]:bg-yellow-600 md:p-0  md:aria-[current=page]:bg-transparent md:aria-[current=page]:text-yellow-600 " onClick={()=>setToggle(true)}>Home</NavLink>
        </li>
        <li className='bg-black'>
          <NavLink to="products" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  text-white aria-[current=page]:bg-yellow-600 md:aria-[current=page]:bg-transparent md:aria-[current=page]:text-yellow-600 hover:bg-yellow-600" onClick={()=>setToggle(true)}>Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
            </svg></NavLink>
          {/* Dropdown menu */}
          <div id="dropdownNavbar" className=" hidden z-10 font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
            <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
              <li>
                <NavLink to="products" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</NavLink>
              </li>
              <li aria-labelledby="dropdownNavbarLink">
                <NavLink id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-yellow-600  text-white">Dropdown<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg></NavLink>
                <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
                  <ul className="py-2 text-sm text-gray-700 " aria-labelledby="doubleDropdownButton">
                    <li>
                      <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100  text-white" onClick={()=>setToggle(true)}>Overview</NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 " onClick={()=>setToggle(true)}>My downloads</NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 " onClick={()=>setToggle(true)}>Billing</NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 " onClick={()=>setToggle(true)}>Rewards</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink to="#" className="block px-4 py-2 hover:bg-yellow-600  text-white" onClick={()=>setToggle(true)}>Earnings</NavLink>
              </li>
            </ul>
            <div className="py-1">
              <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " onClick={()=>setToggle(true)}>Sign out</NavLink>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="#" className="block py-2 px-3  rounded-sm hover:bg-yellow-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white" onClick={()=>setToggle(true)}>Services</NavLink>
        </li>
        <li>
          <NavLink to="#" className="block py-2 px-3  rounded-sm hover:bg-yellow-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white" onClick={()=>setToggle(true)}>Pricing</NavLink>
        </li>
        <li className='bg-black'>
          <NavLink to="#" className="block py-2 px-3  rounded-sm hover:bg-yellow-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white" onClick={()=>setToggle(true)}>Contact</NavLink>
        </li>

        </div>

        <div className='flex flex-col font-medium p-4 md:p-0    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   bg-black'>
        <li className='bg-black'>
          <button onClick={()=>setDropDwon(!dropdown)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  text-white hover:bg-yellow-600 ">
            My account 
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
            </svg></button>
          {/* Dropdown menu */}
          <div id="dropdownNavbar" className={dropdown==true?"hidden z-10 font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ":" z-10 font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"}>
            <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
              <li>
                <NavLink to="signup" className="block px-4 py-2 hover:bg-gray-100 " onClick={()=>setToggle(true)}>Sign up</NavLink>
              </li>
              <li>
                <NavLink to="login" className="block px-4 py-2 hover:bg-gray-100  " onClick={()=>setToggle(true)}>Logn in</NavLink>
              </li>
            </ul>
            <div className="py-1">
              <NavLink to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " onClick={()=>setToggle(true)}>Sign out</NavLink>
            </div>
          </div>
        </li>
        </div>
        
      </ul>
    </div>

    
    
  </div>
</nav>






  
  
  </>
}
