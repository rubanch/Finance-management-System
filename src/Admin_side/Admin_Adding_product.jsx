// import React, { useState } from 'react';
// import axios from 'axios';

// const Admin_Adding_Product = () => {
//   const [product, setProduct] = useState({
//     id: 0,
//     title: '',
//     price: '',
//     ProfileImage: '',
//     UniqueFileName: '',
//     product_description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('https://localhost:7069/api/CartDetails', product)
//       .then(response => {
//         console.log('Data saved:', response.data);
//         // Clear the form
//         setProduct({
//           id: 0,
//           title: '',
//           price: '',
//           ProfileImage: '',
//           UniqueFileName: '',
//           product_description: ''
//         });
//       })
//       .catch(error => {
//         console.error('There was an error saving the data:', error);
//       });
//   };

//   return (

// <>
//   <div style={{
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f5f5f5' // Light background color
//   }}>
//     <div style={{
//       width: '50%', // Adjust width as needed
//       padding: '20px',
//       backgroundColor: 'white', // White content container
//       boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Optional: adds a subtle shadow
//       borderRadius: '5px' // Optional: rounds the corners of the container
//     }}>
//       <h2 style={{ textAlign: 'center' }}>Add the product here</h2>
//       <form onSubmit={handleSubmit} style={{ margin: 'auto', width: '80%' }}>

//   <div class="form-group">
//     <input
//       type="text"
//       class="form-control"
//       name="id"
//       value={product.id}
//       onChange={handleChange}
//       placeholder="ID"
//       style={{ margin: '10px 0' }}
//     />
//   </div>
//   <div class="form-group">
//     <input
//       type="text"
//       class="form-control"
//       name="title"
//       value={product.title}
//       onChange={handleChange}
//       placeholder="Title"
//       style={{ margin: '10px 0' }}
//     />
//   </div>
//   <div class="form-group">
//     <input
//       type="text"
//       class="form-control"
//       name="price"
//       value={product.price}
//       onChange={handleChange}
//       placeholder="Price"
//       style={{ margin: '10px 0' }}
//     />
//   </div>
//   <div class="form-group">
//     <input
//       type="file"
//       class="form-control"
//       name="profileImage"
//       value={product.ProfileImage}
//       onChange={handleChange}
//       placeholder="Profile Image URL"
//       style={{ margin: '10px 0' }}
//     />
//   </div>
//   <div class="form-group">
//     <input
//       type="text"
//       class="form-control"
//       name="UniqueFileName"
//       value={product.UniqueFileName}
//       onChange={handleChange}
//       placeholder="Unique File Name"
//       style={{ margin: '10px 0' }}
//     />
//   </div>
//   <div class="form-group">
//     <textarea
//       class="form-control"
//       name="product_description"
//       value={product.product_description}
//       onChange={handleChange}
//       placeholder="Product Description"
//       style={{ margin: '10px 0' }}
//     />
//   </div>
//   <button type="submit" class="btn btn-primary" style={{ width: '100%' }}>Save Product</button>
//       </form>
//     </div>
//   </div>
// </>
//   );
// };

// export default Admin_Adding_Product;





import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin_Adding_Product = () => {
  const [product, setProduct] = useState({
    id: 0,
    title: '',
    price: '',
    profileImage: null, // Changed to null since it's a file
    // uniqueFileName: '',
    productDescription: '' // CamelCase for consistency
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'file') {
      // Handling file input separately
      setProduct(prevState => ({
        ...prevState,
        [name]: e.target.files[0]
      }));
    } else {
      setProduct(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // Append all product fields to formData
    Object.keys(product).forEach(key => {
      formData.append(key, product[key]);
    });

    try {
      const response = await axios.post('https://localhost:7169/api/CartDetails', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Required header for file upload
        }
      });
      console.log('Data saved:', response.data);
      alert('Data has been inserted.')
      setProduct({
        id: 0,
        title: '',
        price: '',
        profileImage: null,
        // uniqueFileName: '',
        productDescription: ''
      });
    } catch (error) {
      console.error('There was an error saving the data:', error);
      alert("data not submitted.")
    }
  };

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5' // Light background color
      }}>
        <div style={{
          width: '50%', // Adjust width as needed
          padding: '20px',
          backgroundColor: 'white', // White content container
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Optional: adds a subtle shadow
          borderRadius: '5px' // Optional: rounds the corners of the container
        }}>
          <h2 style={{ textAlign: 'center' }}>Add the product here</h2>
          <form onSubmit={handleSubmit} style={{ margin: 'auto', width: '80%' }}>

            <div class="form-group">
              {/* <input
                type="text"
                class="form-control"
                name="id"
                value={product.id}
                onChange={handleChange}
                placeholder="ID"
                style={{ margin: '10px 0' }}
              /> */}
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="title"
                value={product.title}
                onChange={handleChange}
                placeholder="Title"
                style={{ margin: '10px 0' }}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Price"
                style={{ margin: '10px 0' }}
              />
            </div>
            <div class="form-group">
              <input
                type="file"
                class="form-control"
                name="profileImage"
                value={product.ProfileImage}
                onChange={handleChange}
                placeholder="Profile Image URL"
                style={{ margin: '10px 0' }}
              />
            </div>
            {/* <div class="form-group">
    <input
      type="text"
      class="form-control"
      name="UniqueFileName"
      value={product.UniqueFileName}
      onChange={handleChange}
      placeholder="Unique File Name"
      style={{ margin: '10px 0' }}
    />
  </div> */}
            <div class="form-group">
              <textarea
                class="form-control"
                name="product_description"
                value={product.product_description}
                onChange={handleChange}
                placeholder="Product Description"
                style={{ margin: '10px 0' }}
              />
            </div>
            <button type="submit" class="btn btn-primary" style={{ width: '100%' }}>Save Product</button>
            <Link to='/deleteproduct'> <button className='btn btn-danger pt-2 mt-2' style={{ width: "100%" }}>Delete product</button></Link>
          </form>

        </div>
      </div>
    </>
  )
};

export default Admin_Adding_Product;
