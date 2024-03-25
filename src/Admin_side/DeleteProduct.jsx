import React, { useState } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
  const [id, setId] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`https://localhost:7169/api/CartDetails/api/Delete_product/${id}`);
      console.log(response.data);
      alert('Product deleted successfully!');
      setId(''); // Clear the input field after successful deletion
    } catch (error) {
      console.error('Error deleting the product:', error);
      alert('Failed to delete the product.');
    }
  };

  return (
//     <div className="container d-flex justify-content-center" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", backgroundColor: "#FFECB3", padding: "20px" }}>
//     <form onSubmit={handleDelete}>
//         <div className="form-group">
//             <label htmlFor="id">Product ID:</label>
//             <input
//                 type="text"
//                 id="id"
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//                 required
//                 className="form-control"
//                 style={{ width: "300px" }}
//             />
//         </div>
//         <button type="submit" className="btn btn-primary">Delete Product</button>
//     </form>
// </div>

<div className="container d-flex justify-content-center align-items-center"  style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", backgroundColor: "#FFECB3", padding: "20px",  height: "100vh"  }}>
    <form onSubmit={handleDelete} className="p-3 mb-2 bg-light rounded">
        <div className="form-group">
            <h2>Please enter the product ID to delete the product</h2>
            <label htmlFor="id">Product ID:</label>
            <input
                type="text"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                className="form-control"
                style={{ width: "300px" }}
            />
        </div>
        <button type="submit" className="btn btn-primary">Delete Product</button>
    </form>
</div>



  );
};

export default DeleteProduct;
