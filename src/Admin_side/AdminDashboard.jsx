import React from 'react'
import "./AdminDashboard.css"
import 'bootstrap/dist/css/bootstrap.css';
import { height, positions } from '@mui/system';
import View_data_of_user from './View_data_of_user';
import { Link } from 'react-router-dom';
import CardsPage from './Cards/CardsPage';
import CreditCardDetails from './User_card_info';


function AdminDashboard() {
  return (
    <  div  className="main fixed-top" >
    {/* nav */}
    <nav className="navbar navbar-inverse bg-success">
  <div className="container-fluid">
    <div className="navbar-header">
      {/* <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button> */}
      <a className="navbar-brand" href="#">Finance Management system</a>
    </div>
    <Link to='/'> <button type="button" class="btn btn-outline-warning">Logout</button></Link>
    
  </div>
</nav>


<div className="container-fluid text-center">
<div class="row content">
    {/* <div class="col-sm-2 sidenav" style={{height:"100vh"}}>
      <p><button><Link className="nav-link active" aria-current="page" to="/View_data_of_user">View user details</Link></button></p>
      <p><button><Link className="nav-link active" aria-current="page" to="#">View user card details</Link></button></p>
      <p><button><Link className="nav-link active" aria-current="page" to="/Adminaddingproduct">Product management</Link></button></p>
    </div> */}
    <div class="col-sm-2 sidenav" style={{height:"100vh"}}>
    <Link className="btn btn-secondary mt-3 container-fluid" to="/View_data_of_user" >View user details</Link>
<Link className="btn btn-secondary mt-3 container-fluid" to="/Cardspage" >Create EMI card</Link>
<Link className="btn btn-secondary mt-3 container-fluid" to="/Adminaddingproduct">Product management</Link>
<Link className='btn btn-secondary mt-3 container-fluid' to='/productview'>List of product</Link>

    </div>
    <div class="col-sm-8 text-left"> 
      <h3>Hello admin</h3>
      <p>&emsp; &emsp; &emsp;</p>
      <hr/>
      <h3>Users EMI Card details and the amount they have</h3>
       {/* <View_data_of_user/> */}
       <CreditCardDetails/>




    </div>

    <div class="col-sm-2 sidenav">
      <div className='leftnav' style={{height:"100vh"}}>
        <p>ADS</p>
      </div>
      <div class="well">
        <p>ADS</p>
      </div>
    </div>
   
    </div>

    




  
</div>
    
    
    
    </div>
  )
}

export default AdminDashboard