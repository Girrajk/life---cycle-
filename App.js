// 









import React, { Component } from 'react'
import Unmount from './Components/Unmount'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showComp: true,
    };
  }

  toggleComp=()=>{
    this.setState((prevState)=>({
      showComp: !prevState.showComp,
    }));
  };

  render() {
    return (
      <div>
        {/* <Unmount/> */}
        <button onClick={this.toggleComp}>Click</button>
        {this.state.showComp && <Unmount/>}
      </div>
    )
  }
}













// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserManagementApp = () => {
//   const [user, setUser] = useState({ username: '', email: '', password: '', phoneNumber: '' });
//   const [users, setUsers] = useState([]);
//   const [showList, setShowList] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleAddUser = () => {
//     if (user.username && user.email && user.password && user.phoneNumber) {
//       setUsers([...users, user]);
//       setUser({ username: '', email: '', password: '', phoneNumber: '' });
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">User Management Application</h1>

//       <div className="card p-4 mb-4">
//         {/* <h4>Add User</h4> */}
//         <div className="form-group mb-3">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={user.username}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter username"
//           />
//         </div>

//         <div className="form-group mb-3">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="form-group mb-3">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>

//         <div className="form-group mb-3">
//           <label htmlFor="phoneNumber">Phone Number</label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={user.phoneNumber}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter phone number"
//           />
//         </div>

//         <button onClick={handleAddUser} className="btn btn-primary">Add User</button>
//       </div>

//       <div className="text-center mb-4">
//         <button
//           className="btn btn-secondary"
//           onClick={() => setShowList(!showList)}
//         >
//           {showList ? 'Hide User List' : 'Show User List'}
//         </button>
//       </div>

//       {showList && (
//         <div className="card p-4">
//           <h4>User List</h4>
//           {users.length > 0 ? (
//             <ul className="list-group">
//               {users.map((u, index) => (
//                 <li key={index} className="list-group-item">
//                   <strong>Username:</strong> {u.username} <br />
//                   <strong>Email:</strong> {u.email} <br />
//                   <strong>Phone:</strong> {u.phoneNumber}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-muted">No users added yet.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserManagementApp;
