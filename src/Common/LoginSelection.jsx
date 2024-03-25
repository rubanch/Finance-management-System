import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";



function LoginSelection() {


   
  return (
    <>

    {/* navbar segment */}
     <div> <nav class="navbar fixed-top  " style={{ backgroundColor: '#9CAFAA' }}  >
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Finance Management System</span>
  </div>
</nav>


{/* body segment */}
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center" style={{ boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)' }}>

        <h2> click here based on your category</h2>
      <Link to="/UserLogin">  <button className="btn btn-primary m-2"  >User Login</button></Link>
       <Link to="/LoginAdmin"> <button className="btn btn-secondary m-2"  >Admin Login</button></Link>
      </div>
    </div>
    </div>
    
    <Outlet/>
    </>
   
  )
}

export default LoginSelection;




