import { useDispatch, useSelector } from "react-redux";
import "./Cart.styles.scss";
import { ReactComponent as CartIcon } from "../../assets/images/shopping-bag.svg";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { toggleCart } from "../../store/cart/cart.action";
const Cart = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => {
    dispatch(toggleCart(!isCartOpen));
  };
  return (
    <div className="cart-wrapper" onClick={toggleIsCartOpen}>
      <CartIcon className="cart-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
