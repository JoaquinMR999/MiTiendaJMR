import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './loginComponent.css';

const LoginComponent = ({ onLogin, onLogout, isLoggedIn, user }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(name, email);
        setEmail('');
        setName('');
        navigate(location.state.pathname);
        alert('¡Has iniciado sesión!');
    };

    const handleLogout = (e) => {
        e.preventDefault();
        onLogout();
        navigate('/');
    };

    return (
        <section className="loginContainer">
            {!isLoggedIn && (
                <form className='loginForm' onSubmit={handleLogin}>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button className="button-6" type="submit" >
                        Iniciar sesion
                    </button>
                </form>
            )}

            {isLoggedIn && (
                <div>
                    <button type="button" className="button-6"  onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                    <p>¿{user.name}, quieres cerrar la sesión?</p>
                </div>
            )}
        </section>
    );
};

LoginComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string,
    }),
};

export default LoginComponent;