import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import "./CheckoutItem.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, removeItem } =
    useContext(CartContext);
  const { imageUrl, name, qty, price } = cartItem;
  const clearItemHandler = () => removeItem(cartItem);
  const incrementHandler = () => addItemToCart(cartItem);
  const decrementHandler = () => removeItemFromCart(cartItem);
  return (
    <div className="checkout-item">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <div className="quantity">
        <span className="decrement" onClick={decrementHandler}>
          &#10094;
        </span>
        <span>{qty}</span>
        <span className="increment" onClick={incrementHandler}>
          &#10095;
        </span>
      </div>
      <h2 className="price">{price}</h2>
      <span className="remove" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};
export default CheckoutItem;
