
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import axios from 'axios';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardsPage = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    CVC : "",
    name: '',
    card_Amount :""

  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:7169/api/Values/api/Add_Emi_card', state);
      console.log('Data saved:', response.data);
      alert('Data inserted successfully!');
      // You can add more actions here after the data is successfully posted
    } catch (error) {
      console.error('Error saving data:', error);
      alert('! Data has not been inserted');
      // You can add error handling here
    }
  }

  return (
    <div className="container-fluid my-2 position-fixed  " style={{textAlign:"center", backgroundColor:"#D6DAC8"}}>
      <div className="card" style={{backgroundColor:"#FBF3D5"}}>
        <div className="card-body">
          <h5 className="card-title text-center">Credit Card Details</h5>
          <Cards
            number={state.number}
            name={state.name}
            expiry={state.expiry}
            CVC={state.cvc}
            card_Amount={state.card_Amount}
            
          />
          <form className="my-4" onSubmit={handleSubmit}>
            <div className="form-group">
              <h6>Enter the card number</h6>
              <input
                type="number"
                name="number"
                className="form-control"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="form-row">
              <div className="col">
              <h6>Enter the Card expiry</h6>
                <input
                  type="text"
                  name="expiry"
                  className="form-control"
                  placeholder="Expiry Date (MM/YY)"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col">
              <h6>Enter the card CVC</h6>
                <input
                  type="tel"
                  name="CVC"
                  className="form-control"
                  placeholder="CVC"
                  value={state.CVC}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            <div className="form-group mt-3">
            <h6>Enter the cardholder name</h6>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Cardholder Name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="form-group mt-3">
            <h6>Enter the card amount</h6>
              <input
                type="text"
                name="card_Amount"
                className="form-control"
                placeholder="Enter Amount"
                value={state.card_Amount}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
