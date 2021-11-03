import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';

import Cel from '../images/celulares.png'
import Com from '../images/Comida.png'
import Ene from '../images/Energia.png'
import Men from '../images/Menu.png'
import Mod from '../images/Moda.png'
import Mueb from '../images/Muebles.png'
import Neg from '../images/NegocioIMG.png'
import Teg from '../images/tecnologia.png'
import Res from '../images/Restaurante.png'

function HeroSection() {
  return (
    <div style={{backgroundColor:'#1c2237', paddingBottom: '8rem'}} id="catalogo_">
        
        <Container>
            <h1 class="heading" style={{paddingTop: '4rem', textAlign: 'center'}}>Catálogo 🔎</h1>
    <Row style={{ paddingTop: '4rem'}}>
        <Col sm>
            <Card >
                <Card.Img variant="top" src={Cel} />
                <Card.Body>
                    <Card.Title>Telefonía 📱</Card.Title>
                    <Card.Text>
                        ¿Vendes telefonía o accesorios? ¡Necesitas esta página web! Incrementa la confianza a tus clientes.
                    </Card.Text>
                    <Button variant="primary" href="https://marcogrimaldo.github.io/cat-griza/pomato/index.html">Ver ➡</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm>
            <Card >
                <Card.Img variant="top" src={Com} />
                <Card.Body>
                    <Card.Title>Comida 🍝</Card.Title>
                    <Card.Text>
                        ¿Preparas alimentos? ¡Necesitas esta página web! Dale toda la información a tus clientes. 
                    </Card.Text>
                    <Button variant="primary" href="https://marcogrimaldo.github.io/cat-griza/king-of-pasta/index.html">Ver ➡</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm>
        <Card >
                <Card.Img variant="top" src={Ene} />
                <Card.Body>
                    <Card.Title>Energía ⚡</Card.Title>
                    <Card.Text>
                        ¿Tu negocio es tradicional? ¡Necesitas esta página web! Pon tu negocio en la web para ser completamente formal.
                    </Card.Text>
                    <Button variant="primary" href="https://marcogrimaldo.github.io/cat-griza/2092_shelf/index.html">Ver ➡</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    <Row style={{ paddingTop: '4rem'}}>
    <Col sm>
            <Card >
                <Card.Img variant="top" src={Men} />
                <Card.Body>
                    <Card.Title>Menú 🍱</Card.Title>
                    <Card.Text>
                        ¡Ahora en papel! Y que el cátalogo o menú de tu negocio esté en la Web.
                    </Card.Text>
                    <Button variant="primary" href="https://marcogrimaldo.github.io/cat-griza/templatemo_539_simple_house/index.html">Ver ➡</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm>
            <Card >
                <Card.Img variant="top" src={Mod} />
                <Card.Body>
                    <Card.Title>Moda 💃</Card.Title>
                    <Card.Text>
                        ¿Vendes accesorios de moda o ropa? ¡Necesitas esta página web! Da el siguiente paso en tu emprendimiento.
                    </Card.Text>
                    <Button variant="primary" href="https://marcogrimaldo.github.io/cat-griza/2114_pixie/index.html">Ver ➡</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm>
        <Card >
                <Card.Img variant="top" src={Mueb} />
                <Card.Body>
                    <Card.Title>Muebles 🪑</Card.Title>
                    <Card.Text>
                        Si los muebles y carpintería es lo tuyo, definitivamente necesitas esta página web.
                    </Card.Text>
                    <Button variant="primary" href="https://marcogrimaldo.github.io/cat-griza/niture/index.html">Ver ➡</Button>
                </Card.Body>
            </Card>
        </Col >
    </Row>
    <Row style={{ paddingTop: '4rem'}}>
    <Col sm>
            <Card >
                <Card.Img variant="top" src={Neg} />
                <Card.Body>
                    <Card.Title>Negocio 💲</Card.Title>
                    <Card.Text>
                        Haz crecer tu negocio con esta página web, tus clientes tendrán más confianza y podrán conocer más de tus productos.
                    </Card.Text>
                    <Button variant="primary" href="https://marcogrimaldo.github.io/cat-griza/templatemo_546_sixteen_clothing/index.html">Ver ➡</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm>
            <Card >
                <Card.Img variant="top" src={Res} />
                <Card.Body>
                    <Card.Title>Restaurante 🌮</Card.Title>
                    <Card.Text>
                        ¿Preparas alimentos? ¡Necesitas esta página web! Dale toda la información a tus clientes. 
                    </Card.Text>
                    <Button variant="primary" href="https://marcogrimaldo.github.io/cat-griza/bootstrap-restaurant/index.html">Ver ➡</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col sm>
        <Card >
                <Card.Img variant="top" src={Teg} />
                <Card.Body>
                    <Card.Title>Productos 📺</Card.Title>
                    <Card.Text>
                        Consigue que tus clientes vean todos los productos que vendes y verder mucho más.
                    </Card.Text>
                    <Button variant="primary" href="https://marcogrimaldo.github.io/cat-griza/pcoint/index.html">Ver ➡</Button>
                </Card.Body>
            </Card>
        </Col >
    </Row>
    </Container>
    </div>
  );
}

export default HeroSection;