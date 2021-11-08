import React,{useState,useEffect} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';

import Cel from '../../../images/celulares.png'
import Com from '../../../images/Comida.png'
import Ene from '../../../images/Energia.png'
import Men from '../../../images/Menu.png'
import Mod from '../../../images/Moda.png'
import Mueb from '../../../images/Muebles.png'
import Neg from '../../../images/NegocioIMG.png'
import Teg from '../../../images/tecnologia.png'
import Res from '../../../images/Restaurante.png'

import { Button } from '../../Button';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { Button as Button2} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import {
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';

function Products() {

    const [pageWb, setpageWb] = useState('(ninguno)');
    const [packageWb, setpackageWb] = useState('(ninguno)');

    useEffect(() => {
      try {
        // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        // just a fallback for older browsers
        window.scrollTo(0, 0);
      }
    }, []);


  return (
    <>
      <div style={{backgroundColor:'#1c2237', paddingBottom: '8rem'}} id="catalogo_">
        
        <Container>
            <h1 class="heading" style={{paddingTop: '4rem', textAlign: 'center'}}>¡Felicidades! Estás a pocos pasos de tener tu web ⚡</h1>
            <h4 class="heading2" style={{paddingTop: '4rem', textAlign: 'center'}}>Selecciona una página base y sigue bajando 👇  </h4>
    <Row style={{ paddingTop: '4rem'}}>
        <Col sm>
            <Card >
                <Card.Img variant="top" src={Cel} />
                <Card.Body>
                    <Card.Title>Telefonía 📱</Card.Title>
                    <Card.Text>
                        ¿Vendes telefonía o accesorios? ¡Necesitas esta página web! Incrementa la confianza a tus clientes.
                    </Card.Text>
                    <HashLink to="/cotizar#precio" ><Button2 variant="primary" onClick={() => setpageWb('Telefonía')}>Seleccionar ✅</Button2></HashLink>
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
                    <HashLink to="/cotizar#precio" ><Button2 variant="primary" onClick={() => setpageWb('Comida')}>Seleccionar ✅</Button2></HashLink>
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
                    <HashLink to="/cotizar#precio" ><Button2 variant="primary" onClick={() => setpageWb('Energía')}>Seleccionar ✅</Button2></HashLink>
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
                    <HashLink to="/cotizar#precio" ><Button2 variant="primary" onClick={() => setpageWb('Menú')}>Seleccionar ✅</Button2></HashLink>
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
                    <HashLink to="/cotizar#precio" ><Button2 variant="primary" onClick={() => setpageWb('Moda')}>Seleccionar ✅</Button2></HashLink>
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
                    <HashLink to="/cotizar#precio" ><Button2 variant="primary" onClick={() => setpageWb('Muebles')}>Seleccionar ✅</Button2></HashLink>
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
                    <HashLink to="/cotizar#precio" ><Button2 variant="primary" onClick={() => setpageWb('Negocio')}>Seleccionar ✅</Button2></HashLink>
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
                    <HashLink to="/cotizar#precio" ><Button2 variant="primary" onClick={() => setpageWb('Restaurante')}>Seleccionar ✅</Button2></HashLink>
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
                    <HashLink to="/cotizar#precio" ><Button2 variant="primary" onClick={() => setpageWb('Productos')}>Seleccionar ✅</Button2></HashLink>
                </Card.Body>
            </Card>
        </Col >
    </Row>
    </Container>
    </div>
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section' id="precio">
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Selecciona el paquete 📦</h1>
          <div className='pricing__container'>
            <Link to='/cotizar' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Rápido</h3>
                <h4>$1,999</h4>
                <p>MXN</p>
                <ul className='pricing__container-features'>
                  <li>Página Web</li>
                  <li>3 Meses de Soporte</li>
                  <li>$99 USD</li>
                </ul>
                <HashLink to="/cotizar#contactoA" ><Button buttonSize='btn--wide' buttonColor='primary' onClick={() => setpackageWb('Rápido')}>
                Seleccionar ✅
                </Button></HashLink>
              </div>
            </Link>
            <Link to='/cotizar' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Normal</h3>
                <h4>$3,499</h4>
                <p>MXN</p>
                <ul className='pricing__container-features'>
                  <li>Página Web Customizada</li>
                  <li>6 Meses de Soporte</li>
                  <li>$169 USD</li>
                </ul>
                <HashLink to="/cotizar#contactoA" ><Button buttonSize='btn--wide' buttonColor='blue' onClick={() => setpackageWb('Normal')}>
                Seleccionar ✅
                </Button></HashLink>
              </div>
            </Link>
            <Link to='/cotizar' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamante</h3>
                <h4>$7,999</h4>
                <p>MXN</p>
                <ul className='pricing__container-features'>
                  <li>Diseño Original</li>
                  <li>12 Meses de Soporte</li>
                  <li> $399 USD</li>
                </ul>
                <HashLink to="/cotizar#contactoA" ><Button buttonSize='btn--wide' buttonColor='primary' onClick={() => setpackageWb('Diamante')} href="#contact">
                Seleccionar ✅
                </Button></HashLink>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#1c2237'
    }} id="contactoA">
      <h1 class="heading2">Has seleccionado la página: <u>{pageWb}</u></h1>
      <h1 class="heading2">Y el paquete: <u>{packageWb}</u></h1>  
      <br/><br/>
      <h4 class="heading2">Selecciona en que plataforma quieres continuar</h4>
      <a
              className='social-icon-link'
              href='http://m.me/GrizaWeb'
              target='_blank'
              aria-label='Facebook'
              style={{paddingInline: '1em'}}
            >
              <FaFacebook size="5em"/>
            </a>
            
            <a
              className='social-icon-link'
              href={'https://api.whatsapp.com/send?phone=5215623737294&text=¡Hola!%20Estoy%20interesado%20en%20adquirir%20mi%20página%20web%2C%20con%20el%20paquete%20'+packageWb+'%20con%20la%20plantilla%20'+pageWb+'.'}
              target='_blank'
              aria-label='Whatsapp'
            >
              <FaWhatsapp size="5em"/>
            </a>
            <br/><br/><br/><br/>
            <h4 class="heading3">¡Selecciona la plataforma para ponerte en contacto con nosotros y afinar todos los detalles! 🙌</h4>
    </div>
    </>
  );
}

export default Products;
