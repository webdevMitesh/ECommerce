import React, { useEffect, useState } from 'react';

function Cart({ cart }) {
    const [totalamt, setTotalAmt] = useState(0);

    useEffect(() => {
        console.log("Cart state updated:", cart);
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
        }
        setTotalAmt(total.toFixed(2));  // Format the total amount to 2 decimal places
    }, [cart]);  // Recalculate total when cart updates

    // Display "Cart is empty" if no items in the cart
    if (cart.length === 0) {
        return <h3>Your cart is empty.</h3>;
    }

    return (
        <>
            <h1 className="product-h1">Cart</h1>
            <div className="totalamt">
                <h6>Total payable amount is: ${totalamt}</h6>
            </div>
            <div className="card-container">
                {cart.map((data, i) => (
                    <div className="card" style={{ width: '18rem' }} key={i}>
                        <img src={data.image} className="card-img-top" alt={data.title} />
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">
                                {data.description.length > 100 ? `${data.description.slice(0, 90)}...` : data.description}
                            </p>
                            <p className="card-text"><strong>Price: ${data.price}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cart;
