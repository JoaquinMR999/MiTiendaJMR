
import React, { useContext, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CardDetails from "./components/cardDetails/CardDetails";
import CartList from "./components/cartList/CartList";
import productsData from "../data.json";
import LoginComponent from "./components/loginComponent/LoginComponent";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { theme } = useContext(ThemeContext);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const showMenuScreen = () => {
    setIsCartVisible(false);
  };

  const addToCart = (productToAdd) => {
    const existingCartItem = cart.find(
      (item) => item.product.id === productToAdd.id
    );

    if (existingCartItem) {
      setCart((prevCart) => {
        return prevCart.map((item) =>
          item.product.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { product: productToAdd, quantity: 1 },
      ]);
    }
  };

  const handleLogin = (name, email) => {
    setUser({ name, email });
    localStorage.setItem("user", JSON.stringify({ name, email }));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    console.log(isLoggedIn);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section id="body" className={theme}>
      <Header
        onFilterChange={handleFilterChange}
        onToggleCart={toggleCartVisibility}
        onShowMenuScreen={showMenuScreen}
        cartItemCount={cartItemCount}
      />
      
      {isCartVisible ? (
        <CartList cart={cart} />
      ) : (
        <CardDetails products={productsData} filter={filter} addToCart={addToCart} />
      )}
      <LoginComponent
        onLogin={handleLogin}
        onLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        user={user}
      />
      <Footer />
    </section>
  );
}

export default App;
