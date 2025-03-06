import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Signup() {
    const [sucess, setSucess] = useState(null)
    const [faild, setFaild] = useState(null)
    const [token, setToken] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    let nav = useNavigate()
    


    async function handleSignup (values){
        try{
            let res=await  axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
            console.log(res)
       
                setSucess(res?.data?.message)
                setToken(res?.data?.token)
                localStorage.setItem("token",token)
                setFaild(" ")
                nav("/home")
     

            
            
        }catch(err){
            console.log(err)
            setFaild(err.response.data.message)
            setSucess(" ")
        }
       
        
    }

   

  let formik = useFormik({
    initialValues:{
        
            name: "",
            email:"",
            password:"",
            rePassword:"",
            phone:"",
        
    },onSubmit:handleSignup
    
  })


  



 








    return <>


<form className="max-w-sm mx-auto mt-[100px]" onSubmit={formik.handleSubmit}>
  <div className="mb-5">
    <label htmlFor="name"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.name} type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  
  <div className="mb-5">
    <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>

  <div className="mb-5 relative">
  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Your password
  </label>
  <input
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.password}
    type={toggle ? "text" : "password"}
    id="password"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder=""
    required
  />
  <i
    onClick={() => setToggle(!toggle)}
    className={`absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer mt-3 ${
      toggle ? "text-red-400 fa-solid fa-eye" : "fa-solid fa-eye-slash"
    }`}
  ></i>
</div>

<div className="mb-5 relative">
  <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Your repassword
  </label>
  <input
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.rePassword}
    type={toggle2 ? "text" : "password"}
    id="rePassword"
    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder=""
    required
  />
  <i
    onClick={() => setToggle2(!toggle2)}
    className={`absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer mt-3 ${
      toggle2 ? "text-red-400 fa-solid fa-eye" : "fa-solid fa-eye-slash"
    }`}
  ></i>
</div>
<div className="mb-5">
    <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
    <input  onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.phone} type="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>
  
  <button type="submit" className="text-white bg-black hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  <h1>{sucess}</h1>
  <h1>{faild}</h1>
</form>


    
  </>
  
}
