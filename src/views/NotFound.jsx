import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">¡Error 404 - Página no encontrada!</h1>
        <p className="not-found-message">Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/" className="not-found-link">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;