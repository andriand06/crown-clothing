import { useContext } from "react";
import "./ProductCard.styles.scss";
import Button from "../Button";
import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  //wrap method addItemToCart dari CartContext ke addToCart agar optimal dan tidak langsung memanggil addItemToCart ketika component ini dirender
  //avoid error update provider and component
  const addToCart = () => addItemToCart(product);
  return (
    <div className="card-wrapper">
      <img src={imageUrl} alt={name}></img>
      <Button
        name="addtocart"
        label="Add To Cart"
        className="add-to-cart"
        onClick={addToCart}
      />
      <div className="card-description">
        <span className="name">{name}</span>{" "}
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
