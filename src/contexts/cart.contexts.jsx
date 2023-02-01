import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
    isCartPopupOpen: false,
    setIsCartPopupOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    numItemsInCart: 0,
    totalCost: 0
});

export const CartContextProvider = ({ children }) => {
    const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [numItemsInCart, setNumItemsInCart] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const addItemToCart = (productToAdd) => {
        const newItems = cartItems.map((item) => {
            if (item.id === productToAdd.id)
            {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });
        
        if (!newItems.find((item) => item.id === productToAdd.id))
        {
            newItems.push({
                ...productToAdd,
                quantity: 1
            });
        }

        setCartItems(newItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newItems = cartItems.map((item) => {
            if (item.id === productToRemove.id)
            {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item;
        });

        const newItemsWithNoZeroQuantity = newItems.filter((item) => item.quantity > 0);

        setCartItems(newItemsWithNoZeroQuantity);
    }

    const deleteItemFromCart = (productToDelete) => {
        const cartWithoutProductToDelete = cartItems.filter((item) => item.id !== productToDelete.id);
        setCartItems(cartWithoutProductToDelete);
    }

    useEffect(() => {
        const numItems = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
        setNumItemsInCart(numItems);
    }, [cartItems]);

    useEffect(() => {
        const totalCostOfCart = cartItems.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);
        setTotalCost(totalCostOfCart);
    }, [cartItems]);

    const value = {
        isCartPopupOpen,
        setIsCartPopupOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        numItemsInCart,
        totalCost
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}