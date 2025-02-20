import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <section className='section cartpage'>
      <div className="container">
        <h2 className="hd mb-0">Your Cart</h2>
        <p>There are {cartItems.length} products in your cart.</p>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} style={{ width: "50px", marginRight: "10px" }} />
                    {item.name}
                  </td>
                  <td>&#8377;{item.newPrice.toFixed(2)}</td>
                  <td>1</td>
                  <td>&#8377;{item.newPrice.toFixed(2)}</td>
                  <td>
                    <Button onClick={() => removeItem(item.id)}>
                      <MdClose style={{ fontSize: "20px", color: "red" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Cart;


