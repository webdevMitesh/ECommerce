// import { useState } from "react";
// import React from 'react';

// function Login({ user, setUser, userlog, setLoguser }) {
//   const [userdata, setuserdata] = useState({ username: '', password: '' });

//   // Handle changes to the form fields
//   const onChangeHandler = (e) => {
//     setuserdata({ ...userdata, [e.target.name]: e.target.value });
//   };

//   // Handle form submission (login logic)
//   const Logedinuser = (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     for (let i = 0; i < user.length; i++) {
//       if (user[i].username === userdata.username && user[i].password === userdata.password) {
//         console.log('Logged in user:', user[i]);
//         setLoguser(true);
//         sessionStorage.setItem('user', JSON.stringify(user[i]));
//         return;
//       }
//     }

//     console.log('Invalid username or password');
//   };

//   return (
//     <form onSubmit={Logedinuser}>
//       <div className="login-container">
//         <div className="login-box">
//           <h2>Login</h2>
//           <div className="user-box">
//             <input 
//               type="text" 
//               name="username" 
//               required 
//               placeholder="Username" 
//               onChange={onChangeHandler} 
//               value={userdata.username} 
//             />
//             <label>Username</label>
//           </div>
//           <div className="user-box">
//             <input 
//               type="password" 
//               name="password" 
//               required 
//               placeholder="Password" 
//               onChange={onChangeHandler} 
//               value={userdata.password} 
//             />
//             <label>Password</label>
//           </div>
//           <button className="btn" type="submit">Login</button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default Login;
import { useState } from "react";
import React from 'react';

function Login({ user, setLoguser }) {
  const [userdata, setuserdata] = useState({ username: '', password: '' });

  // Handle changes to the form fields
  const onChangeHandler = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  // Handle form submission (login logic)
  const Logedinuser = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Loop through all users and check credentials
    for (let i = 0; i < user.length; i++) {
      if (user[i].username === userdata.username && user[i].password === userdata.password) {
        console.log('Logged in user:', user[i]);

        // Set the logged-in user to loguser state
        setLoguser(user[i]);

        // Persist the logged-in user data in sessionStorage
        sessionStorage.setItem('user', JSON.stringify(user[i]));  // Store in sessionStorage
        
        // Clear the form fields after login
        setuserdata({ username: '', password: '' });
        
        return;
      }
    }

    console.log('Invalid username or password');
  };

  return (
    <form onSubmit={Logedinuser}>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <div className="user-box">
            <input 
              type="text" 
              name="username" 
              required 
              placeholder="Username" 
              onChange={onChangeHandler} 
              value={userdata.username} 
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input 
              type="password" 
              name="password" 
              required 
              placeholder="Password" 
              onChange={onChangeHandler} 
              value={userdata.password} 
            />
            <label>Password</label>
          </div>
          <button className="btn" type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
