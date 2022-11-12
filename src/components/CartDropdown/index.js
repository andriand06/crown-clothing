import "./CardDropdown.styles.scss";
import Button from "../Button";
const CartDropdown = ({ carts }) => {
  //   const { name, imageUrl, qty, price } = carts;
  return (
    <div className="cart-dropdown" id="cart-dropdown">
      <div className="cart-items"></div>
      <Button
        name="checkout"
        label="Go To Checkout"
        className="checkout-button"
      />
    </div>
  );
};

export default CartDropdown;
