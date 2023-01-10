import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import { selectCartItems } from "../../store/cart/cart.selector";
import { Wrapper, CartItems, EmptyMessage } from "./CartDropdown.styles";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <Wrapper id="cart-dropdown">
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>No Item</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">Go To Checkout</Link>
    </Wrapper>
  );
};

export default CartDropdown;
