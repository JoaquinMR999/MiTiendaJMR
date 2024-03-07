
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import productsData from '../../../data.json';
import './productDetails.css';
import BackButton from "../backbutton/BackButton";
import AddButton from "../addbutton/AddButton";


const ProductDetails = ({ addToCart}) => {
    const { theme } = useContext(ThemeContext);
    const {id} = useParams();
    const product = productsData.find(product => product.id === parseInt(id));

    if (!product) {
        return <div>No se encuentra ningun producto</div>
    }

    const {title, price, description, image } = product;
    return (
        <div className='product-details-container'>
        <section className={`product-details-section ${theme}`}>
          <article className="details-header">
            <img className="details-image" src={image} alt={title} />
            
          </article>
         
          <article className="details-content">
            <h3>{title}</h3>
            <p className="product-details-description">{description}</p>
            <h3 className="details-price">${price}</h3>
            <AddButton onClick={() => addToCart(product)} /> 
            <BackButton />
          </article>
        </section>
      </div>
    )
}

export default ProductDetails;