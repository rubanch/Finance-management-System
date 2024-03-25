

// DataTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from db.json using Axios
    axios.get('https://localhost:7169/api/CartDetails') // Adjust the URLhttps://localhost:7278/api/Get_Card_Info
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>List of product</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              {/* <td>{item.profileImage}</td> */}
              {/* <td>{item.email_Address}</td> */}
              {/* <td>{item.pan}</td> */}
              {/* <td> <button className='btn btn-success'> Accept user</button></td> */}
              <td> <Link className='btn btn-danger' to='/deleteproduct'> Delete product</Link></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ProductView;



