import React from "react";
import CartComponent from "../cartComponent/CartComponent";
import "./cartList.css";

const CartListModified = ({ cart, onRemoveFromCart }) => {
  const calculateTotal = () => {
    const total = cart.reduce(
      (total, cartItem) =>
        total + cartItem.product.price * cartItem.quantity,
      0
    );
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <CartComponent
            key={cartItem.product.id}
            {...cartItem.product}
            quantity={cartItem.quantity}
          />
        ))
      ) : (
        <p>No hay nada en tu carrito</p>
      )}
      <h3 className="total">Total to Pay: ${calculateTotal()}</h3>
    </div>
  );
};

export default CartListModified;