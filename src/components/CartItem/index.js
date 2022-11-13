import "./CartItem.styles.scss";

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, qty, price } = cartItem;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <h2>{name}</h2>
        <span>
          {qty} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
