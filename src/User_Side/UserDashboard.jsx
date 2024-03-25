import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayingUserData from './Card_Dashboard_view';
import Cards from 'react-credit-cards-2';

import { Link } from 'react-router-dom';





function UserDashboard() {
  return (
    <>
      <  div className="main fixed-top" >
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
            <div class="col-sm-2 sidenav" style={{ height: "100vh" }}>
              <Link className='btn btn-warning container-fluid' to="/UserCardSubmitForm">Apply for EMI card</Link>
              <Link className='btn btn-warning container-fluid mt-3' to='/EmiCalculator'>EMI calculator</Link>
              <Link className='btn btn-warning container-fluid mt-3' to='/FinanceTracker'>Finance Tracker</Link>
              <Link className='btn btn-warning container-fluid mt-3' to='/productHome'>purchase Product</Link>


            </div>
            <div class="col-sm-8 text-left">
              <h3>Welcome to the User page</h3>
              <p>&emsp; &emsp; &emsp;</p>
              <hr />
              <h3>User Request Form for EMI Card</h3>
              {/* <DisplayingUserData/> */}
              <Link className='btn btn-secondary ' to='/DisplayingUserData'>Display user Card</Link>


             




              















            </div>

            <div class="col-sm-2 sidenav">
              <div className='leftnav' style={{ height: "100vh" }}>
                <>

                  <div>
                    <div className="card" style={{ width: "15rem" }}>
                      <img src="..." class="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">Some quick example </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="card  mt-5" style={{ width: "15rem" }}>
                      <img src="..." class="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">Some quick example </p>
                      </div>
                    </div>
                  </div>











                  <div>
                    <div className="card  mt-5" style={{ width: "15rem" }}>
                      <img src="..." class="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">Some quick example </p>
                      </div>
                    </div>
                  </div>










                </>
              </div>
              <div class="well">
                <p>ADS</p>
              </div>
            </div>

          </div>







        </div>



      </div>



    </>
  )
}

export default UserDashboard;


