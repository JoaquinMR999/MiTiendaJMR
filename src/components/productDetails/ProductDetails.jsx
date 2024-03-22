import React, { useContext, useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./productDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsThunk } from "../../redux/reducers/productsReducer";
import BackButton from "../backbutton/BackButton.jsx";

const ProductDetails = ({ addToCart }) => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === id)
  );

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        await dispatch(getProductDetailsThunk(id));
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [dispatch, id]);

  // Render loading spinner
  if (loading) {
    return (
      <div className="product-details-container">
        <RingLoader size={80} color="#2893db" loading={loading} />
      </div>
    );
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-details-container">
      <section className={`product-details-section ${theme}`}>
        <article className="details-header">
          <img
            className="details-image"
            src={product.image}
            alt={product.title}
          />
        </article>
        <article className="details-content">
          <h3>{product.title}</h3>
          <p className="product-details-description">{product.description}</p>
          <h3 className="details-price">${product.price}</h3>
          <button
            className="addProductButton"
            onClick={() => addToCart(product)}
          >
            Agregar al Carrito
          </button>
          <BackButton />
        </article>
      </section>
    </div>
  );
};

export default ProductDetails;