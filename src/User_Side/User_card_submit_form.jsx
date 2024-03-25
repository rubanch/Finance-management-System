// import React, { useState } from 'react';
// import axios from 'axios';

// const User_card_submit_form = () => {
//   const [formData, setFormData] = useState({
//     Fullname: '',
//     Date_of_birth: '',
//     ContactNumber: '',
//     Email_Address: '',
//     Current_Address: '',
//     Permanent_Address: '',
//     Nationality: '',
//     Gender: '',
//     Select_card_type: '',
//     PAN: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/path-to-your-api/db.json', formData);
//       console.log(response.data);
//       // Handle the response as needed

//     //   setIsSubmitted(true); // Set the submission state to true
//     //   setTimeout(() => setIsSubmitted(false), 3000); // Hide the notification after 3 seconds


//     } catch (error) {
//       console.error('Error posting form data:', error);
//     }
//   };

//   return (
//     <>
// {/* {isSubmitted && <div>Data has been inserted successfully!</div>} */}
// <form onSubmit={handleSubmit} className="container mt-5">
//     <h2> User applying for New EMI Card</h2>
//   <div className="mb-3">
//     <input type="text" className="form-control" name="Fullname" placeholder="Full Name" onChange={handleChange} />
//   </div>
//   <div className="mb-3">
//     <input type="date" className="form-control" name="Date_of_birth" placeholder="Date of Birth" onChange={handleChange} />
//   </div>
//   <div className="mb-3">
//     <input type="text" className="form-control" name="ContactNumber" placeholder="Contact Number" onChange={handleChange} />
//   </div>
//   <div className="mb-3">
//     <input type="email" className="form-control" name="Email_Address" placeholder="Email Address" onChange={handleChange} />
//   </div>
//   <div className="mb-3">
//     <textarea className="form-control" name="Current_Address" placeholder="Current Address" onChange={handleChange}></textarea>
//   </div>
//   <div className="mb-3">
//     <textarea className="form-control" name="Permanent_Address" placeholder="Permanent Address" onChange={handleChange}></textarea>
//   </div>
//   <div className="mb-3">
//     <input type="text" className="form-control" name="Nationality" placeholder="Nationality" onChange={handleChange} />
//   </div>
//   <div className="mb-3">
//     <select className="form-select" name="Gender" onChange={handleChange}>
//       <option value="">Select Gender</option>
//       <option value="male">Male</option>
//       <option value="female">Female</option>
//       <option value="other">Other</option>
//     </select>
//   </div>
//   <div className="mb-3">
//     <select className="form-select" name="Select_card_type" onChange={handleChange}>
//       <option value="">Select Card Type</option>
//       <option value="debit">Debit</option>
//       <option value="credit">Credit</option>
//     </select>
//   </div>
//   <div className="mb-3">
//     <input type="text" className="form-control" name="PAN" placeholder="PAN Card" onChange={handleChange} />
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </>

//   );
// };

// export default User_card_submit_form;


import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const User_card_submit_form = () => {
  const navigate = useNavigate;

  const [formData, setFormData] = useState({
    Fullname: '',
    Date_of_birth: '',
    ContactNumber: '',
    Email_Address: '',
    Current_Address: '',
    Permanent_Address: '',
    Nationality: '',
    Gender: '',
    Select_card_type: '',
    PAN: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'Fullname':
        if (!value) return 'Full name is required';
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Full name must contain only letters and spaces';
        break;
      case 'ContactNumber':
        if (!value) return 'Contact number is required';
        if (!/^\d{10}$/.test(value)) return 'Contact number must be 10 digits';
        break;
      case 'Email_Address':
        if (!value) return 'Email address is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Email address is invalid';
        break;
      // Add more validation cases as needed
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: validateField(name, value) });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Check for errors before submitting
  //   const errors = Object.values(formErrors).filter(error => error);
  //   if (errors.length > 0) {
  //     console.error('Form has errors:', errors);
  //     return;
  //   }
  //   try {
  //     const response = await axios.post('https://localhost:7169/api/AddCardForm', formData);
  //     console.log(response.data);

  //     navigate('/UserDashboard');

  //   } catch (error) {
  //     console.error('Error posting form data:', error);
  //   }

  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for errors before submitting
    const errors = Object.values(formErrors).filter(error => error);
    if (errors.length > 0) {
      console.error('Form has errors:', errors);
      return;
    }
    console.log('Submitting form data:', formData); // Log formData for debugging
    try {
      const response = await axios.post('https://localhost:7169/api/AddCardForm', formData, {
        headers: {
          'Content-Type': 'application/json' // Ensure correct content-type is set
        }
      });
      console.log('Response data:', response.data); // Log response data for debugging
  
      if (response.status === 200) {
        navigate('/UserDashboard');
      } else {
        console.error('Form submission failed:', response);
      }
    } catch (error) {
      console.error('Error posting form data:', error);
    }
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-5">

        <h2> User applying for New EMI Card</h2>
        <div className="mb-3">
          <input type="text" className="form-control" name="Fullname" placeholder="Full Name" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="date" className="form-control" name="Date_of_birth" placeholder="Date of Birth" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="ContactNumber" placeholder="Contact Number" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" name="Email_Address" placeholder="Email Address" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <textarea className="form-control" name="Current_Address" placeholder="Current Address" onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <textarea className="form-control" name="Permanent_Address" placeholder="Permanent Address" onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="Nationality" placeholder="Nationality" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <select className="form-select" name="Gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <select className="form-select" name="Select_card_type" onChange={handleChange}>
            <option value="">Select Card Type</option>
            <option value="platinum">Platinum E</option>
            <option value="Gold">Gold</option>
          </select>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="PAN" placeholder="PAN Card" onChange={handleChange} />
        </div>
        {Object.keys(formErrors).map((fieldName) => (
          formErrors[fieldName] && <div key={fieldName} style={{ color: 'red' }}>{formErrors[fieldName]}</div>
        ))}
        <Link to=''> <button type="submit" className="btn btn-primary" >Register</button></Link>
      </form>
    </>
  );
};

export default User_card_submit_form;
