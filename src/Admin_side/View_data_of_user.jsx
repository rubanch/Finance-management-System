







// // import React, {Component} from 'react'
// // import axios from '../../axios'

// // export default class users extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             Users: []
// //         };
// //     }
// //     getUsersData() {
// //         axios
// //             .get(`/users`, {})
// //             .then(res => {
// //                 const data = res.data
// //                 console.log(data)

// //             })
// //             .catch((error) => {
// //                 console.log(error)
// //             })

// //     }
// //     componentDidMount(){
// //         this.getUsersData()
// //     }
// //     render() {

// //         return (
// //             <div></div>
// //         )
// //     }
// // }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const View_data_of_user = () => {
//     const [usersData, setUsersData] = useState([]);

//     const getUsersData = () => {
//         axios.get('https://localhost:7278/api/Get_Card_Info')
//             .then(res => {
//                 const data = res.data;
//                 console.log(data);
//                 setUsersData(data); // Update state with fetched data
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     };

//     useEffect(() => {
//         getUsersData();
//     }, []); // Empty dependency array ensures this effect runs only once on component mount

//     return (
//         <div>
//             {/* Your component content */}
//         </div>
//     );
// };

// export default View_data_of_user;

















// import React, {Component} from 'react'
// import axios from 'axios';
// import React, { Component } from 'react';


// export default class View_data_of_user extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Users: []
//         };
//     }
//     getUsersData() {
//         axios
//             .get(`https://localhost:7278/api/Get_Card_Info`, {})
//             .then(res => {
//                 const data = res.data
//                 console.log(data)
//                 const users = data.map(u =>
//                     <div>
//                     <p>{u.Id}</p>
//                     <p>{u.fullname}</p>
//                     <p>{u.email}</p>
//                     <p>{u.website}</p>
//                     <p>{u.company.name}</p>
//                     </div>
//                     )

//                     this.setState({
//                         users
//                     })

//             })
//             .catch((error) => {
//                 console.log(error)
//             })

//     }
//     componentDidMount(){
//         this.getUsersData()
//     }
//     render() {

//         return (
//             <div><h2>
//                 {this.state.users}
//             </h2>
                
//             </div>
//         )
//     }
// }

// DataTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View_data_of_user = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from db.json using Axios
    axios.get('https://localhost:7169/api/Get_Card_Info') // Adjust the URLhttps://localhost:7278/api/Get_Card_Info
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Validate the user</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Date of Birth</th>
            <th>Contact Number</th>
            <th>Email Address</th>
            <th>PAN Number</th>
            <th>Generate card </th>
            <th>Delete card</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullname}</td>
              <td>{item.date_of_birth}</td>
              <td>{item.contactNumber}</td>
              <td>{item.email_Address}</td>
              <td>{item.pan}</td>
              <td> <button className='btn btn-success'> Accept user</button></td>
              <td> <button className='btn btn-danger'> Delete user</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default View_data_of_user;



