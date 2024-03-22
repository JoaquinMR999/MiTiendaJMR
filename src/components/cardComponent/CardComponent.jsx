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
  


  const handleClickDetails = async () => {
    getProductDetails();
  }; 

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
        <h3>{title}</h3>
      </article>
      <article className="price-container">
        <h3 className="price">${price}</h3>
      </article>
      {user && (
        <div>
        
          <Link to={`/product/${id}`} className="button-6"><button id="detailsButton" className="detailsButton">
            Mostrar mas detalles...

          </button></Link>
          <button
            className="addProductButton"
            onClick={handleAddToCart}
          >
            Pulsa para añadir al carro
          </button>
        </div>
      )}
      {user?.role === "admin" && (
        <ul className="admin_utils">
          <li>
            <i className="fa fa-pencil" onClick={handleOnEdit}></i>
          </li>
          <li>
            <i className="fa fa-trash-can" onClick={onDelete}></i>
          </li>
        </ul>
      )}
    </section>
  );
};

export default CardComponent;