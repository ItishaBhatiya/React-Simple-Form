import React, { useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const SimpleForm = () => {
    let[userData,setuserData]=useState({
        username:"",
        email:"",
        password:"",
    })

    // let[isLogin,setisLogin]=useState(false)

    let passwordRegex = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    let emailRegex = /(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    let usernameRegex = /^[a-zA-Z0-9]{3,}$/

    let[userDataError,setuserDataError]=useState({
        username:false,
        email:false,
        password:false
    })    

    const handleInputData=(e)=>{
        e.preventDefault();
        let{name,value}=e.target
        console.log(name,value);
        setuserData({...userData,[name]:value})
        
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(passwordRegex.test(userData.password) && emailRegex.test(userData.email) && usernameRegex.test(userData.username)){
            toast.success('Success!', {
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
            setuserDataError({...userDataError,password:false,email:false,username:false})
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
            setuserDataError({...userDataError,password:true,email:true,username:true})
        }
        console.log(userDataError);
    }
  return (
    <div>
        <ToastContainer/>           
        <form onSubmit={handlesubmit}>
            <h1>Student SignUp From</h1>
            <label>UserName : </label>
            <input type="text" value={userData.username} name='username' placeholder='Enter Your UserName' onChange={handleInputData} 
             style={{borderColor:userDataError.username ? "red":userData.username.length>0  ? "green" : "black"}}/>
            <br/>
            <label>Email : </label>
            <input type="email" value={userData.email} name='email' placeholder='Enter Your Email' onChange={handleInputData}
              style={{borderColor:userDataError.email ? "red":userData.email.length>0  ? "green" : "black"}} />
            <br/>
            <label>PassWord : </label>
            <input type="text" value={userData.password} name='password' placeholder='Enter Your Password' onChange={handleInputData}
              style={{borderColor:userDataError.password ? "red":userData.password.length>0  ? "green" : "black"}}  />
            <br/>
            <input type="submit" value="SignUp"/>
        </form> 
    </div>
  )
}

export default SimpleForm