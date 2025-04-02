import React from 'react'
import {  useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();

    let shopnowonclick = () =>{
        navigate('/prolist')
    }
 
    return (
        <>
            <div className="home">
                <div className="home-text">
                <h1>Welcome to Our Website</h1>
                <p>Your one-stop shop for amazing products!</p>
                <button className="cta-button" onClick={shopnowonclick} >Shop Now</button>
                </div>
            </div>
        </>
    );
}

export default Home;