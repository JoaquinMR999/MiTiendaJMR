/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import './cardComponent.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AddButton from "../addbutton/AddButton";


const CardComponent = ({id, title, price, description, image, onAddToCart}) => {
    const { theme } = useContext(ThemeContext);
    const { isLoggedIn } = useAuth();


     const handleAddToCart = () => {
         onAddToCart({id, title, price, description, image});
     }
    return(
        <section className={`card-container ${theme}`}>
            <article className="card-header">
                <img className="card-image" src={image} alt={title} />
                <h3>{title}</h3>
            </article>
            <article className="price-container">
                <h3 className="price">${price}</h3>
            </article>
            {isLoggedIn && (
                <div className="product-actions">
                <Link to={`/product/${id}`} className="link_style_none">
                  <button  class="button-6" id="detailsButton">
                    Mostrar detalles
                  </button>
                </Link>
                <button class="button-6" className="addProductButton" onClick={handleAddToCart}>
                  Añadir al Carrito
                </button>
              </div>
            )}
        </section>
    )
}

export default CardComponent;