import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./loginComponent.css";
import BackButton from "../backbutton/BackButton";
import { useForm } from "react-hook-form";

export default function LoginComponent({
  onLogin,
  onLogout,
  isLoggedIn,
  user,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(name, email);
    setEmail("");
    setName("");
    if (location.state != null) {
      navigate(location.state.pathname);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
    navigate("/");
  };

  return (
    <section className="loginContainer">
      {!isLoggedIn ? (
        <form action="" className="loginForm">
          <label htmlFor="name">Usuario:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Acceder
          </button>
        </form>
      ) : (
        <div className="logoutContainer">
          <p className="logoutLabel">¿{user.name}, quieres cerrar la sesión?</p>
          <button className="button-6" onClick={handleLogout}>
            Cerrar sesión
          </button>

          <BackButton />
        </div>
      )}
    </section>
  );
}
