
import { useContext } from 'react';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.contexts';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartPopupOpen, setIsCartPopupOpen, numItemsInCart} = useContext(CartContext);
    const toggleCartPopup = () => setIsCartPopupOpen(!isCartPopupOpen);
    
    return (
        <div className="cart-icon-container" onClick={toggleCartPopup}>
            <ShoppingBagIcon className="shopping-icon"/>
            <span className="item-count">{numItemsInCart}</span>
        </div>
    );
};

export default CartIcon;