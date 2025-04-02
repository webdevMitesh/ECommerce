// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Static/Navbar';
// import Home from './Components/Static/Home';
// import Productlist from './Components/Routing/Productlist';
// import About from './Components/Routing/About';
// import Cart from './Components/Routing/Cart';
// import Profile from './Components/User/Profile';
// import Contact from './Components/Routing/Contact';
// import Login from './Components/User/Login';
// import { useEffect, useState } from 'react';
// import Footer from './Components/Static/Footer';

// function App() {

//   const [cart, setCart] = useState([])
//   const [user, setUser] = useState()
//   const [loguser, setLoguser] = useState(false)

//   const dataofuser = async () => {
//     var log = await fetch('https://fakestoreapi.com/users')
//     var userdata = await log.json()
//     setUser(userdata);
//     console.log(1111, userdata)
//   }

//   useEffect(() => {
//     dataofuser();
//   }, [])

//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/abt" element={<About />} />
//         <Route path="/cart" element={loguser ? <Cart cart={cart} /> : <Login user={user} setUser={setUser} loguser={loguser} setLoguser={setLoguser} />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/prolist" element={<Productlist cart={cart} setCart={setCart} />} />
//         <Route path="/pro" element={loguser ? <Profile loguser={loguser} /> : <Login user={user} setUser={setUser} loguser={loguser} setLoguser={setLoguser} />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;



// the below section is from line no.31
// {/* <Route path="/" element={<Home />} /> */}
// {/* <Route path="log" element={<Login user={user} setUser={setUser} loguser={loguser} setLoguser={setLoguser}/>} /> */}
// {/* <Route path="/abt" element={loguser?<About/>:<Login user={user} setUser={setUser} loguser={loguser} setLoguser={setLoguser}/>} />
// <Route path="/cart" element={<Cart cart={cart} />} />
// <Route path="/contact" element={<Contact />} />
// <Route path="/prolist" element={<Productlist  cart= {cart} setCart={setCart}/>} />
// <Route path="/pro" element={<Profile />} /> */}


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Static/Navbar';
import Home from './Components/Static/Home';
import Productlist from './Components/Routing/Productlist';
import About from './Components/Routing/About';
import Cart from './Components/Routing/Cart';
import Profile from './Components/User/Profile';
import Contact from './Components/Routing/Contact';
import Login from './Components/User/Login';
import { useEffect, useState } from 'react';
import Footer from './Components/Static/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);  // State to hold all users
  const [loguser, setLoguser] = useState(null);  // State to hold the logged-in user

  // Fetch user data once
  const dataofuser = async () => {
    const log = await fetch('https://fakestoreapi.com/users');
    const userdata = await log.json();
    setUser(userdata);  // Setting all users in state
  };

  // UseEffect to fetch user data and check for a logged-in user on app load
  useEffect(() => {
    dataofuser();

    // Check if there's a user stored in sessionStorage
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser) {
      setLoguser(storedUser);  // Set logged-in user from sessionStorage
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abt" element={<About />} />
        <Route path="/cart" element={loguser ? <Cart cart={cart} /> : <Login user={user} setLoguser={setLoguser} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prolist" element={<Productlist cart={cart} setCart={setCart} />} />
        <Route path="/pro" element={loguser ? <Profile loguser={loguser} /> : <Login user={user} setLoguser={setLoguser} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
