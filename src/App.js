import LoginAdmin from './Admin_side/LoginAdmin';
import './App.css';
import LoginSelection from './Common/LoginSelection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from './User_Side/UserLogin';
import AdminDashboard from './Admin_side/AdminDashboard';
import UserDashboard from './User_Side/UserDashboard';
import Register from './User_Side/Register';
import Login from './User_Side/login';
import User_card_submit_form from './User_Side/User_card_submit_form';
import View_data_of_user from './Admin_side/View_data_of_user';
import CardsPage from './Admin_side/Cards/CardsPage';
import User_card_info   from './Admin_side/User_card_info';
import Admin_Adding_Product from './Admin_side/Admin_Adding_product';
import DeleteProduct from './Admin_side/DeleteProduct';
import Card_Dashboard_view from './User_Side/Card_Dashboard_view';
import EmiCalculator from './User_Side/Emi_calculator';
import MainFinanceTracker from './User_Side/Finance tracker/MainFinanceTracker';
import { Home } from './Components/Product/Home';
import { Viewcart } from './Components/Product/Viewcart';
import DisplayingUserData from './User_Side/DisplayingUserData'
import Container from "react-bootstrap/Container";
import { useState,createContext, } from 'react';
import ProductView from './Admin_side/Productview';
export const cartContext=createContext();



function App() {

  

  const [cart,setCart]=useState([]);

  return (
   <>
   <Router>
<Container fluid className='container'>
  <cartContext.Provider value={{cart,setCart}}>
    <Routes>
    
      
      <Route path='/productHome' element={<Home/>}/>
     <Route path='/Viewcart' element={<Viewcart/>}/>
        
      </Routes>
      </cartContext.Provider> 
    </Container>
  






   <div>
   <Routes>
   <Route path="/" element={<LoginSelection />}></Route>
   <Route path='/LoginAdmin' element={<LoginAdmin/>}/>
   <Route path='/UserLogin' element={<UserLogin/>}/>
   <Route path='/Admindashboard' element={<AdminDashboard/>}/>
   <Route path='/UserDashboard'  element={<UserDashboard/>}/>
   <Route path='/Login' element={<Login/>}/>
   <Route path='/UserRegister' element={<Register/>}/>
   <Route path='/UserCardSubmitForm' element={<User_card_submit_form/>}/>
   <Route path='/View_data_of_user' element={<View_data_of_user/>}/>
   <Route path='/Cardspage' element={<CardsPage/>}/>
   <Route path='/Usercardinfo' element={<User_card_info/>}/>
   <Route path='/Adminaddingproduct' element={<Admin_Adding_Product/>}/>
   <Route path='/deleteproduct' element={<DeleteProduct/>}/>
   <Route path='/carddashboardview' element={<Card_Dashboard_view/>}/>
   <Route path='/EmiCalculator' element={<EmiCalculator/>} />
   <Route path='/FinanceTracker' element={<MainFinanceTracker/>}/>
   <Route path='/DisplayingUserData' element={<DisplayingUserData/>}/>
   <Route path='/productview' element={<ProductView/>}/>
  
   
   
   
   </Routes>
   </div>
   </Router>


   
   
   
   
   </>
  );
}

export default App;
