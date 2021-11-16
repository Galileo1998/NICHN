import React from 'react'
import { Row, Col, Card, Button } from 'antd';
import { Link } from "react-router-dom";
import Computadora from "../../../assets/img/jpg/pc-reducida.jpg";
import Web from "../../../assets/img/jpg/Web-reducida.jpg";
import Tarjeta from "../../../assets/img/jpg/Tarjeta.jpg"

import "./HomeCourses.scss";

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Libre de Add-Ons con cada nombre de dominio!</h2>
            </Col>
            <Col lg={4}/>
            <Col lg={16}>
                <Row className="row-courses">
                    <Col md={8}><CardCourse 
                    image={Computadora}
                    title="WhoIs" 
                    subtitle="Encuentre información sobre nombres de dominio HN mediante el 
                    Whois para buscar información de registro"
                    link="https://whois.nic.hn/whois.jsp"
                    /></Col> 
                     <Col md={8}><CardCourse 
                    image={Web}
                    title="Registro de Dominio" 
                    subtitle="Compruebe hasta 30 nombres de dominio para buscar dominios, 
                    escriba el nombre de dominio deseado en una línea separada y elija sus extensiones"
                    link="https://punto.hn/domain-registration/index.php"
                    /></Col> 
                     <Col md={8}><CardCourse 
                    image={Tarjeta}
                    title="Promociones" 
                    subtitle="¡Lo hemos hecho que sea fácil para ti! Planes ya creados para cada necesidad
                    Punto de inicio, Pequeñas o grandes empresas."
                    link="https://punto.hn/combo-offers"
                    /></Col> 
                </Row>
            </Col>
            <Col lg={4}/>
        </Row>
    )
}

function CardCourse(props){
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;
    
    return(
        <a href={link} target="_blank" rel="noreferrer">
            <Card
            className="home-courses__card" 
            cover={<img src={image} alt={title} />}
            actions={[<Button>Ingresar</Button>]}
            >
               <Meta title={title} description={subtitle}/>
            </Card>
        </a>
    )
}
