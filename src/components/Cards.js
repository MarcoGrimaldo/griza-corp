import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import styles from "./Cards.module.css";

import { cardsData } from "../services/data";

function HeroSection() {
  console.log(cardsData);
  return (
    <div
      style={{ backgroundColor: "#1c2237", paddingBottom: "8rem" }}
      id="catalogo_"
    >
      <Container>
        <h1
          className="heading"
          style={{ paddingTop: "4rem", textAlign: "center" }}
        >
          Catálogo 🔎
        </h1>
        <div className={styles.cardsContainer}>
          {cardsData.map((data) => {
            return (
              <Card className={styles.cardCustom}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.text}</Card.Text>
                  <Button variant="primary" href={data.link}>
                    Ver ➡
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
