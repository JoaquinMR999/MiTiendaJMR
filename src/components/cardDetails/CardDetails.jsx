import React from "react";
import CardComponent from "../cardComponent/CardComponent";
import './cardDetails.css';

const CardDetailsModified = ({ products, filter, addToCart }) => {
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="card-list-container">
            {filteredProducts.map(product => (
                <CardComponent
                    key={product.id}
                    {...product}
                    onAddToCart={() => addToCart(product)}
                />
            ))}
        </div>
    );
}

export default CardDetailsModified;