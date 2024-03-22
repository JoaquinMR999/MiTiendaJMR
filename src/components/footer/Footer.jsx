import React from "react";
import './footer.css';

export default function Footer() {
    return(
        <div className="footer-container">
            <section className="footer-info">
                <ul className="contact-info">
                    <li><b>Contacto</b></li>
                    <li>Email: Joaquin@mitienda.com</li>
                    <li>Teléfono: +25 232312312</li>
                </ul>
                <ul className="social-media-info">
                    <li><b>RR SS</b></li>
                    <li>Facebook...</li>
                    <li>Twitter...</li>
                    <li>Instagram...</li>
                </ul>
                <ul className="address-info">
                    <li><b>Dirección</b></li>
                    <li>Calle Principal, 123</li>
                    <li>Cordoba, España</li>
                </ul>
            </section>
            <section className="copyright">
                <p>© Tienda de Joaquin.</p>
            </section>
        </div>
    )
}