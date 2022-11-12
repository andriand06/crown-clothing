import { useContext } from "react";
import "./Cart.styles.scss";
import { ReactComponent as CartIcon } from "../../assets/images/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-wrapper" onClick={toggleIsCartOpen}>
      <CartIcon className="cart-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default Cart;
