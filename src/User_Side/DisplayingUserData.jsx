


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DisplayingUserData = () => {
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const id = 1; // Replace with the actual ID you want to fetch

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://localhost:7169/api/Values/api/feth_through/${id}`);
//                 setData(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <div>
//             <h3>Data fetched for ID {id}:</h3>
//             <h3>{data.id}</h3>
//             <h3>{data.name}</h3>
//             <h3>{data.expiry}</h3>
//             <h3>{data.number}</h3>
//             <br/>
//             <h2>{data.card_Amount}</h2>
//         </div>
//     );
// };

// export default DisplayingUserData;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CreditCardInfo from './CreditCardInfo'; // Import the CreditCardInfo component

// const DisplayingUserData = () => {
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const id = 1; // Replace with the actual ID you want to fetch

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://localhost:7169/api/Values/api/feth_through/${id}`);
//                 setData(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     // Pass the fetched data to the CreditCardInfo component
//     return (
//         <div>
//             <CreditCardInfo cardData={data} />
//             <br/>
//             <h2>{data.card_Amount}</h2>
//         </div>
//     );
// };

// export default DisplayingUserData;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CardDisplay from 'react-credit-card-display';

// const DisplayingUserData = () => {
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const id = 1; // Replace with the actual ID you want to fetch

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://localhost:7169/api/Values/api/feth_through/${id}`);
//                 setData(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     // Render the credit card information using the CardDisplay component
//     return (
//         <div>
//             <h3>Data fetched for ID {data.id}:</h3>
//             <CardDisplay
//                 number={data.number}
//                 name={data.name}
//                 expiry={data.expiry}
//             />
//             <br/>
//             <h2>Card Amount: {data.card_Amount}</h2>
//         </div>
//     );
// };

// export default DisplayingUserData;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'; // Import the CSS

const DisplayingUserData = () => {
    const [data, setData] = useState({
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      focused: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = 12; // Replace with the actual ID you want to fetch

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7169/api/Values/api/feth_through/${id}`);
                setData({

                  ...data,
                  number: response.data.number,
                  name: response.data.name,
                  expiry: response.data.expiry,
                  cvc: response.data.cvc 

                });

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleInputFocus = (e) => {
        setData({
          ...data,
          focused: e.target.name
        });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    // Render the credit card information using the Cards component
    return (
        <div>
            <div className='container-sm'>
            {/* <h3>Data fetched for ID {data.id}:</h3> */}
            <Cards
                number={data.number}
                name={data.name}
                expiry={data.expiry}
                cvc={data.cvc}
                focused={data.focused}
            />
            <br/>
            <h2>Card Amount: {data.card_Amount}</h2>
        </div>
        </div>
    );
};

export default DisplayingUserData;
