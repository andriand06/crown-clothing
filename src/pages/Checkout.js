import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../store/cart/cart.selector";
import CheckoutItem from "../components/CheckoutItem";
const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
