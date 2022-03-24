import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";

import styles from "./Products.module.css";

import { Button } from "../../Button";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Button as Button2 } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import { FaFacebook, FaWhatsapp } from "react-icons/fa";

import { cardsData } from "../../../services/data";

function Products() {
  const [pageWb, setpageWb] = useState("(ninguno)");
  const [packageWb, setpackageWb] = useState("(ninguno)");

  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: "#1c2237", paddingBottom: "8rem" }}
        id="catalogo_"
      >
        <Container>
          <h1
            className="heading"
            style={{ paddingTop: "4rem", textAlign: "center" }}
          >
            ¡Felicidades! Estás a pocos pasos de tener tu web ⚡
          </h1>
          <h4
            className="heading2"
            style={{ paddingTop: "4rem", textAlign: "center" }}
          >
            Selecciona una página base y sigue bajando 👇{" "}
          </h4>
          <div className={styles.cardsContainer}>
            {cardsData.map((data) => {
              return (
                <Card className={styles.cardCustom}>
                  <Card.Img variant="top" src={data.img} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.text}</Card.Text>
                    <HashLink to="/cotizar#precio">
                      <Button2
                        variant="primary"
                        onClick={() => setpageWb(data.type)}
                      >
                        Seleccionar ✅
                      </Button2>
                    </HashLink>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </div>
      <IconContext.Provider value={{ color: "#fff", size: 64 }}>
        <div className="pricing__section" id="precio">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Selecciona el paquete 📦</h1>
            <div className="pricing__container">
              <Link to="/cotizar" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Rápido</h3>
                  <h4>$1,999</h4>
                  <p>MXN</p>
                  <ul className="pricing__container-features">
                    <li>Página Web</li>
                    <li>3 Meses de Soporte</li>
                    <li>$99 USD</li>
                  </ul>
                  <HashLink to="/cotizar#contactoA">
                    <Button
                      buttonSize="btn--wide"
                      buttonColor="primary"
                      onClick={() => setpackageWb("Rápido")}
                    >
                      Seleccionar ✅
                    </Button>
                  </HashLink>
                </div>
              </Link>
              <Link to="/cotizar" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Normal</h3>
                  <h4>$3,499</h4>
                  <p>MXN</p>
                  <ul className="pricing__container-features">
                    <li>Página Web Customizada</li>
                    <li>6 Meses de Soporte</li>
                    <li>$169 USD</li>
                  </ul>
                  <HashLink to="/cotizar#contactoA">
                    <Button
                      buttonSize="btn--wide"
                      buttonColor="blue"
                      onClick={() => setpackageWb("Normal")}
                    >
                      Seleccionar ✅
                    </Button>
                  </HashLink>
                </div>
              </Link>
              <Link to="/cotizar" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Diamante</h3>
                  <h4>$7,999</h4>
                  <p>MXN</p>
                  <ul className="pricing__container-features">
                    <li>Diseño Original</li>
                    <li>12 Meses de Soporte</li>
                    <li> $399 USD</li>
                  </ul>
                  <HashLink to="/cotizar#contactoA">
                    <Button
                      buttonSize="btn--wide"
                      buttonColor="primary"
                      onClick={() => setpackageWb("Diamante")}
                      href="#contact"
                    >
                      Seleccionar ✅
                    </Button>
                  </HashLink>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#1c2237",
        }}
        id="contactoA"
      >
        <h1 className="heading2">
          Has seleccionado la página: <u>{pageWb}</u>
        </h1>
        <h1 className="heading2">
          Y el paquete: <u>{packageWb}</u>
        </h1>
        <br />
        <br />
        <h4 className="heading2">
          Selecciona en que plataforma quieres continuar
        </h4>
        <a
          className="social-icon-link"
          href="http://m.me/GrizaWeb"
          aria-label="Facebook"
          style={{ paddingInline: "1em" }}
        >
          <FaFacebook size="5em" />
        </a>

        <a
          className="social-icon-link"
          href={
            "https://api.whatsapp.com/send?phone=5215623737294&text=¡Hola!%20Estoy%20interesado%20en%20adquirir%20mi%20página%20web%2C%20con%20el%20paquete%20" +
            packageWb +
            "%20con%20la%20plantilla%20" +
            pageWb +
            "."
          }
          aria-label="Whatsapp"
        >
          <FaWhatsapp size="5em" />
        </a>
        <br />
        <br />
        <br />
        <br />
        <h4 className="heading3">
          ¡Selecciona la plataforma para ponerte en contacto con nosotros y
          afinar todos los detalles! 🙌
        </h4>
      </div>
    </>
  );
}

export default Products;
