// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Card_Dashboard_view = () => {
//   const [data, setData] = useState(null);
//   const dataId = '2'; // The ID of the data you want to fetch

//   useEffect(() => {
//     const fetchDataById = async () => {
//       try {
//         const response = await axios.get(`https://localhost:7066/api/Values/api/feth_through/${dataId}`);
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchDataById();
//   }, [dataId]);

//   return (
//     <div>
//       {data ? (
//         <div>
//           {/* Display the data here */}
//           <h1>{data.title}</h1>
//           <p>{data.content}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Card_Dashboard_view;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayingUserData = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = 1; // Replace with the actual ID you want to fetch

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7169/api/Values/api/feth_through/${id}`);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Data fetched for ID {id}:</h1>
            <table>
                <thead>
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
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.number}</td>
                        <td>{data.expiry}</td>
                        <td>{data.CVC}</td>
                        <td>{data.name}</td>
                        <td>{data.card_Amount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DisplayingUserData;
