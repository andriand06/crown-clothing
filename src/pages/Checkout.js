import { CartContext } from "../contexts/cart.context";
import { useContext } from "react";
import CheckoutItem from "../components/CheckoutItem";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-wrapper">
      <div className="column-name">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} />;
      })}
      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
