import React from "react";
import PropTypes from "prop-types";
import './AddButton.css'; 

const AddButton = ({ onClick }) => {
  return (
    <button className="addProductButton" onClick={onClick}>
      Añadir al Carrito
    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;