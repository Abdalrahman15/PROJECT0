import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'


export default function () {


  return <>
  <div className='flex flex-col min-h-screen'> 
  <Navbar/>
<div className=' flex-grow mt-[0px] '>
  <Outlet></Outlet>
</div>

<div className=' self-end w-full   '>

<Footer/>
</div>
  </div>
  </>
}
