import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContext } from "../../contexts/products.contexts";

import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map((item) => (
                <ProductCard key={item.id} item={item}/>
            ))};
        </div>
    )
};

export default Shop;