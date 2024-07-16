import React, { useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const SimpleForm = () => {
    let[userData,setuserData]=useState({
        username:"",
        email:"",
        password:"",
    })
    const handleInputData=(e)=>{
        e.preventDefault();
        let{name,value}=e.target
        console.log(name,value);
        setuserData({...userData,[name]:value})
        
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        // let{username,email,password}=userData
        if(userData.email.length > 0 && userData.password.length > 0 && userData.username.length > 0){
            toast.success('Wow so easy!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
                });
        }
        else{
            toast.warn('Fail!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
                });
        }
    }
  return (
    <div>
        <ToastContainer/>
        <h1>Student From</h1>
        <form onSubmit={handlesubmit}>
            <label>UserName : </label>
            <input type="text" value={userData.username} name='username' placeholder='Enter Your UserName' onChange={handleInputData} />
            <br/>
            <label>Email : </label>
            <input type="email" value={userData.email} name='email' placeholder='Enter Your Email' onChange={handleInputData} />
            <br/>
            <label>PassWord : </label>
            <input type="text" value={userData.password} name='password' placeholder='Enter Your Password' onChange={handleInputData} />
            <br/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default SimpleForm