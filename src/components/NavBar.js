import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import {Phone} from "./Phone";
import { Direction } from "./Direction";
import { Email } from "./Email";
import logo from '../assets/img/avatarProgramadora2.png';
import es from '../assets/img/spain.png';
import en from '../assets/img/british.png';
import it from '../assets/img/italy.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50) {
                seScrolled(true);
            } else{
                seScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const [t, i18n] = useTranslation("global");
    const traducir = (newLang) => {
        i18n.changeLanguage(newLang)
        localStorage.setItem("lang", newLang)
    };
    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className='icon' src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link' :'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>{t("navbar.home")}</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link' :'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>{t("navbar.skills")}</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link' :'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>{t("navbar.projects")}</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/graciela-del-valle-romano-11954275/" target="_blank"  rel="noreferrer noopener"><img src={navIcon1} alt="" /></a>
                        <a href="https://www.facebook.com/gracieladr" target="_blank"  rel="noreferrer noopener"><img src={navIcon2} alt="" /></a>
                        <a href="https://github.com/GracielaRomano" target="_blank"  rel="noreferrer noopener"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className='vvd' onClick={handleShow}> {t("navbar.button")}</button>
                    </span>
                    <div className="banderas">
                        <button onClick={() => traducir("es")}><img src={es} alt=""/></button>
                        <button onClick={() => traducir("en")}><img src={en} alt=""/></button>
                        <button onClick={() => traducir("it")}><img src={it} alt=""/></button>
                    </div>
                    <Modal show={show} onHide={handleClose} className="modal-styles">
                        <Modal.Header className="modal-header" closeButton>
                            <Modal.Title className="title-modal">{t("navbar.title")}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body"></Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <Container>
                                <Row>
                                    <Col xs={6} md={9}>
                                        <div >
                                            <Direction />
                                            {t("navbar.direction")} <br />
                                            <Phone /> 
                                            {t("navbar.phone")}<br />
                                            <Email /> <a href="mailto:graci.romano@gmail.com">{t("navbar.email")}</a><br />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <Button variant="dark" onClick={handleClose} className="buton-modal">
                                        {t("navbar.close")}
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Footer>
                    </Modal>
                       {/* <button className='vvd' onClick={() => console.log('connect')}><span>Vamos a Conectarnos</span></button>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
    
