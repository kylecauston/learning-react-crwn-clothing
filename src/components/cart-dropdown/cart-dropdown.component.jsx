import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.contexts';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => navigate("/checkout");

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((item) => (<CartItem item={item} key={item.id}/>))
                }
            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </div>
    )
};

export default CartDropdown;