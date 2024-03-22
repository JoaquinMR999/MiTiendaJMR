
import React, { useContext } from "react";
import "./header.css";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header({ onFilterChange, cartItemCount }) {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  const { toogleTheme } = useContext(ThemeContext);
  return (
    <nav className="header">
      <ul className="header-item-list">
        <li className="headerLi">
          <b>
            <Link className="icono" to={"/"}>
              <i className="fa-solid fa-house"></i>
            </Link>
          </b>
        </li>
        <li className="headerLi">
          <input
            className="buscador"
            type="text"
            name="buscador"
            id="buscador"
            placeholder="Buscar productos"
            onChange={handleFilterChange}
          />
        </li>
        <li className="headerLi">
          <Link className="icono" to={"/cart"}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          {cartItemCount > 0 && (
            <span className="contadorCart">{cartItemCount}</span>
          )}
        </li>
        <li className="headerLi">
          <Link className="icono" to={"/login"}>
            <i className="fa-regular fa-user"></i>
          </Link>
        </li>{" "}
        <li className="headerLi" onClick={toogleTheme}>
          <i className="fa-solid fa-circle-half-stroke"></i>
        </li>
      </ul>
    </nav>
  );
}
