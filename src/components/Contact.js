import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {
    const [t] = useTranslation("global");
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState(t("contact.button"));
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
    useEffect(() => {
        let timer;
        if (status.message) {
            timer = setTimeout(() => {
                setStatus({ ...status, message: null });
            }, 5000);
        }

        return () => clearTimeout(timer);
    }, [status.message]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        
        let response = await fetch("https://formspree.io/f/xvoldkrq", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setFormDetails(formInitialDetails);
        if (response.ok) {
          setStatus({ success: true, message: t("contact.message1")});
        } else {
          setStatus({ success: false, message: t("contact.message2")});
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>{t("contact.h2")}</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder={t("contact.input")} onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder={t("contact.input1")} onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder={t("contact.input3")} onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder={t("contact.input2")} onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col size={12} className="px-1 col-12">
                                    <textarea rows="6" value={formDetails.message} placeholder={t("contact.input4")} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                </Col>
                                <Col size={12} className="px-1 col-12">
                                    <button type="submit"><span>{t("contact.button")}</span></button>
                                </Col>
                            {
                                status.message &&
                                <Col size={12} className="px-1 col-12">
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    
}