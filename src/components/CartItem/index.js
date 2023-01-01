import "./CartItem.styles.scss";
import { ItemDetailsWrapper, CartItemWrapper } from "./CartItem.styles";
const CartItem = ({ cartItem }) => {
  const { imageUrl, name, qty, price } = cartItem;
  return (
    <CartItemWrapper>
      <img src={imageUrl} alt={name} />
      <ItemDetailsWrapper>
        {" "}
        <h2>{name}</h2>
        <span>
          {qty} x ${price}
        </span>
      </ItemDetailsWrapper>
    </CartItemWrapper>
  );
};

export default CartItem;
