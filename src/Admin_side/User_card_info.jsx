import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreditCardDetails = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://localhost:7066/api/Values/api/feth_through');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data: ', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7169/api/Values/api/Get_EMI_Card');
        setData(response.data);
        // Add this line to log the data to the console
        console.log('Fetched data:', response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>ID</th>
            <th>Number</th>
            <th>Expiry</th>
            <th>CVC</th>
            <th>Name</th>
            <th>Card Amount</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.number}</td>
              <td>{item.expiry}</td>
              <td>{item.CVC}</td> {/* Corrected this line */}
              <td>{item.name}</td>
              <td>{item.card_Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default CreditCardDetails;
