import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/avatarProgramadora2.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () =>{
return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                {/*<MailchimpForm />*/}
                <Col sm={6}>
                    <img className='icon-footer' src={logo} alt="logo" />
                </Col>
                <Col sm={6} >
                    <div className="social-icon-footer">
                        <a href=""><img src ={navIcon1} /></a>
                        <a href=""><img src ={navIcon2} /></a>
                        <a href=""><img src ={navIcon3} /></a>
                    </div>
                    
                </Col>
            </Row>
            <p> © Copyright 2023. All Rights Reserved</p>
        </Container>
    </footer>
)
}