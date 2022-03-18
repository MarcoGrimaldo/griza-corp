import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/gzlogo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);

    window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={Logo} width="30px" alt="logo"></img>
              <span>riza</span>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/catalogo"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Ejemplos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cotizar"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  ¡Obten tu web!
                </Link>
              </li>

              <li className="nav-btn">
                {button ? (
                  <Link to="/contacto" className="btn-link">
                    <Button buttonStyle="btn--outline">Contactanos</Button>
                  </Link>
                ) : (
                  <Link to="/contacto" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Contactanos
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
