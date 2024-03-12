import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./cardComponent.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const CardComponent = ({
  id,
  title,
  price,
  image,
  onDelete,
  onEdit,
  addToCart,
}) => {
  const { user } = useAuth();
  const { theme } = useContext(ThemeContext);
  const { isLoggedIn } = useAuth();

  const truncatedTitle =
    title.slice(0, 15) + (title.length > 20 ? "..." : "");

  const handleOnEdit = () => {
    onEdit();
  };

  const handleAddToCart = () => {
    const product = {
        id,
        title,
        price,
        image
    };
    addToCart(product);
  };

  return (
    <section className={`card-container ${theme}`}>
      <article className="card-header">
        <img className="card-image" src={image} alt={title} />
        <h3>{truncatedTitle}</h3>
      </article>
      <article className="price-container">
        <h3 className="price">${price}</h3>
      </article>
      {isLoggedIn && (
        <div>
          <button id="detailsButton">
            <Link to={`/product/${id}`} className="link_style_none">
              Detalles...
            </Link>
          </button>
          <button
            className="addProductButton"
            onClick={handleAddToCart} 
          >
            Añadir al carrito
          </button>
        </div>
      )}
      {user && user.role === "admin" && (
        <ul className="admin_utils">
          <li>
            <i className="fa-solid fa-pencil" onClick={handleOnEdit}></i>
          </li>
          <li>
            <i className="fa-solid fa-trash-can" onClick={onDelete}></i>
          </li>
        </ul>
      )}
    </section>
  );
};

export default CardComponent;