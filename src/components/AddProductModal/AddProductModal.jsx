import { useState } from "react";
import React  from "react";
import "./AddProductModal.css";

const AddProductModal = ({addProduct, closeModal}) => {
    const [newProduct, setNewProduct] = useState ({
        title: "",
        price: 0,
        description: "",
        category: "",
        image:"",
        rating: {
            rate: 0,
            count:0,
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(newProduct);
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
                <span className="close-button" onClick={closeModal}>&times;</span>
                <h2>Añadir un nuevo producto</h2>
                <form onSubmit={handleSubmit}>
                    <label>Titulo:</label>
                    <input type="text" name="title" value={newProduct.title} onChange={handleInputChange} />
                    <label>Precio:</label>
                    <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} />
                    <label>Descripcion:</label>
                    <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} />
                    <label>Categoria:</label>
                    <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} />
                    <label>URL de la imagen:</label>
                    <input type="text" name="url" value={newProduct.image} onChange={handleInputChange} />
                    <button type="submit">Añadir nuevo producto.</button>
                </form>
            </div>
        </div>
    )





}