import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.css";


const BackButton = () => {
    return (
        <div className="back-button">
            <Link to="/" className="link_style_none">
                <button className="button-6" id="backButton">
                   Volver atrás
                </button>
            </Link>
        </div>
    );
};

export default BackButton;