import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import { CartContext } from "../../contexts/cart.context";
import { Wrapper, CartItems, EmptyMessage } from "./CartDropdown.styles";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
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
