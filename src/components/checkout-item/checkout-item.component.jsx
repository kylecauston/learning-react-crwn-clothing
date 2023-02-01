import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";

import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, quantity, price } = cartItem;
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);

    const increaseQuantity = () => addItemToCart(cartItem);
    const decreaseQuantity = () => removeItemFromCart(cartItem);
    const deleteItem = () => deleteItemFromCart(cartItem);
    
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decreaseQuantity}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increaseQuantity}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={deleteItem}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;