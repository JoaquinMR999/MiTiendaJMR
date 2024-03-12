import React from "react";
import "./EditProductModal.css";
import {useState} from React;
import {useProducts} from "../../hooks/useProducts.js";


function EditProductModal ({ product, closeModal}){
    const [editedFields, setEditedFields] = useState({
        title: product.title,
        price: product.price,
        description: product.description,
    });
    const { updateProduct } = useProducts();

    const handleInputChange = (e) => {

        const {name, value} = e.target;
        const newValue = name === "price" ? parseFloat(value) : value;
        setEditedFields((prevFields) => ({
            ...prevFields,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedProduct = {
            ...product,
            ...editedFields,
        };

        await updateProduct(product.id, updatedProduct);
        closeModal();
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            closeModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleModalClick}>
            <div className="modal-content">
                <span className ="close-button" onClick={closeModal}>
                    &times;
                </span>
                <h2> Modificar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <label>Titulo:</label>
                    <input type="text" name="title" value={editedFields.title} onChange={handleInputChange} />
                    <label>Precio:</label>
                    <input type="text" name="price" value={editedFields.price} onChange={handleInputChange} />
                    <label>Descripcion:</label>
                    <input type="text" name="description" value={editedFields.description} onChange={handleInputChange} />
                    <button type="submit">Confirmar.</button>
                </form>
            </div>
        </div>

    )
}