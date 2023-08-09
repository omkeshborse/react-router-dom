import React from 'react'
import { useNavigate ,Outlet } from 'react-router-dom';
const Contact = () => {
  const navigate = useNavigate() ;
  const handleBackToHome =()=>{
    console.log("object");
   
  return  navigate('/') ;
  }
  return (
    <>
      <div className="component">Contact</div>
      <Outlet/>
      <button onClick={handleBackToHome}>Back To Home</button> 
    </>
  );
}

export default Contact