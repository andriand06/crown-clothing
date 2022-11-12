import "./ProductCard.styles.scss";
import Button from "../Button";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="card-wrapper">
      <img src={imageUrl} alt={name}></img>
      <Button name="addtocart" label="Add To Cart" className="add-to-cart" />
      <div className="card-description">
        <span className="name">{name}</span>{" "}
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
