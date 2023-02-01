import { createContext, useState, useEffect } from 'react';

import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({
    items: []
});

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products, setProducts };

    useEffect(() => {
        setProducts(SHOP_DATA);
    }, [])

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};