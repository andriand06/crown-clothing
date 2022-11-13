import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartDropdown.styles.scss";
import CartItem from "../CartItem";
import { CartContext } from "../../contexts/cart.context";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown" id="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Link to="/checkout" className="checkout-button">
        Go To Checkout
      </Link>
    </div>
  );
};

export default CartDropdown;
