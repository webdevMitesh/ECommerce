import React, { useEffect, useState } from 'react'

function Productlist({cart,setCart}) {

    const [products, setProducts] = useState([]);

    const addcart = (data)=> {
      setCart(prevCart => [...prevCart, data]);
      console.log(data);
    }

    const UserApi = async () => {
        var response = await fetch('https://fakestoreapi.com/products');
        var data = await response.json();
        setProducts(data);
        console.log(data)
    }

    useEffect(() => {
        UserApi();
    }, []);

    return (
        <div className="card-container">
          {products.map((data, i) => (
            <div className="card" style={{ width: '18rem' }} key={i}>
              <img src={data.image} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description.length > 100 ? `${data.description.slice(0, 90)}...` : data.description}</p>
                <button className='btn' onClick={()=>addcart(data)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      );      
}

export default Productlist;
