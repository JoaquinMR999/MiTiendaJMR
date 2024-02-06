/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CardComponent from "../cardComponent/CardComponent";
import './CardDetails.css';

const CardDetails = ({ products, filter }) => {
    const filteredproducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <div className="card-list-container">
            {filteredproducts.map((product) => (
                <CardComponent
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                />
            ))}
        </div>
    );
}

export default CardDetails;