import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({item}) => {
    const {name, price, imageUrl} = item;
    const { addItemToCart } = useContext(CartContext);

    const handleAddToCartButton = () => addItemToCart(item);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={handleAddToCartButton}>Add To Cart</Button>
        </div>
    );
};

export default ProductCard;