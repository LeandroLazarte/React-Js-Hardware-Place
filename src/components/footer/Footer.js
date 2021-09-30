import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer ">
        <div className="aboutUs ">
          <h2 className="titulo-footer ">Atención al cliente</h2>
          <span>
            Realiza tu compra online y recibilo en tu domicilio o retira en
            nuestro local en Mar del Plata.
          </span>
        </div>
        <div className="socialMedia ">
          <h2 className="titulo-footer">Redes Sociales</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-square fa-lg">Facebook</i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram-square fa-lg">Instagram</i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube-square fa-lg">Youtube</i>
              </a>
            </li>
          </ul>
        </div>
        <div className="quickboton ">
          <h2 className="titulo-footer ">Informacion</h2>
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Políticas de privacidad</a>
            </li>
            <li>
              <a href="/">Ayuda</a>
            </li>
            <li>
              <a href="/">Términos y condiciones</a>
            </li>
          </ul>
        </div>
        <div className="contacto ">
          <h2 className="titulo-footer ">Contactenos</h2>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Uruguay 1612, Mar del Plata, Argentina</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <span>(0223) 4736666</span>
            </li>
            <li>
              <i className="fab fa-whatsapp"></i>
              <span>+549 223444444</span>
            </li>
            <li>
              <i className="fas fa-envelope-open-text"></i>
              <span>hardwareplace@hotmail.com</span>
            </li>
            <li>
              <i className="fas fa-user"></i>
              <span>
                Atención al cliente: Lunes a Viernes de 08:00 a 18:00 hs.
                Sabados de 08:00 a 13:30 hs.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <span className="copy">
        &copy;2020.Hardware place (Todos los derechos reservados)
      </span>
    </footer>
  );
};

export default Footer;
