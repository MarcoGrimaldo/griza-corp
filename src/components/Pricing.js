import React,{useState,useCallback} from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link,useHistory } from 'react-router-dom';
import {Modal, Button as Button2} from 'react-bootstrap';

function Pricing() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/cotizar'), [history]);


  const handleShow = (modalType) => 
  {
    if(modalType == "p1")
    {
      setmodalData({title: 'Paquete Rápido',info:'💻Página web del catálogo, personalizada para tu negocio.  \n\n🌐Página web ya montada en Internet. \n\n📱Cotización de tu dominio (tu-negocio.com). \n\n🔐Certificado SSL (Tu página segura). \n\n🙋‍♂️Cambios durante 3 meses.(Soporte)'})
    }
    if(modalType == "p2")
    {
      setmodalData({title: 'Paquete Normal',info:'💻Página web con base en alguna del catálogo, personalizada a tu gusto, con nuevas secciones, diseños personalizados, etc... Los requerimientos que necesites dentro del Front-End. \n\n🌐Página web ya montada en Internet. \n\n📱Dominio de página web incluido (tu-negocio.com). \n\n🔐Certificado SSL (Tu página segura). \n\n🙋‍♂️Cambios durante 6 meses.(Soporte)'})
    }
    if(modalType == "p3")
    {
      setmodalData({title: 'Paquete Diamante',info:'💻Página web desde 0, diseño completamente personalizado, de acuerdo a tus necesidades y gustos. Podemos implementar lo que gustes, pero el precio puede incrementar de acuerdo a la complejidad de los requerimientos. 😅 \n\n🌐Página web ya montada en Internet. \n\n📱Dominio de página web incluido (tu-negocio.com). \n\n🔐Certificado SSL (Tu página segura). \n\n🙋‍♂️Cambios durante 12 meses.(Soporte)'})
    }
    setShow(true);
  }

  const [modalData, setmodalData] = useState({title: 'Programa 1',info:'Info'}) 


  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Paquetes 📦</h1>
          <div className='pricing__container'>
            <Link to='/' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Rápido</h3>
                <h4>$99</h4>
                <p>USD</p>
                <ul className='pricing__container-features'>
                  <li>Página Web</li>
                  <li>3 Meses de Soporte</li>
                  <li>$1,999 MXN</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary' onClick={() => handleShow('p1')}>
                ¿Qué incluye?
                </Button>
              </div>
            </Link>
            <Link to='/' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Normal</h3>
                <h4>$169</h4>
                <p>USD</p>
                <ul className='pricing__container-features'>
                  <li>Página Web Customizada</li>
                  <li>6 Meses de Soporte</li>
                  <li>$3,499 MXN</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue' onClick={() => handleShow('p2')}>
                ¿Qué incluye?
                </Button>
              </div>
            </Link>
            <Link to='/' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamante</h3>
                <h4>$399</h4>
                <p>USD</p>
                <ul className='pricing__container-features'>
                  <li>Diseño Original</li>
                  <li>12 Meses de Soporte</li>
                  <li>$7,999 MXN</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary' onClick={() => handleShow('p3')}>
                ¿Qué incluye?
                </Button>
              </div>
            </Link>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalData.info}</Modal.Body>
          <Modal.Footer>
            <Button2 variant="secondary" onClick={handleClose}>
              Cerrar
            </Button2>
            <Button2 variant="primary" onClick={handleOnClick}>
              ¡Comprar!
            </Button2>
          </Modal.Footer>
        </Modal>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
