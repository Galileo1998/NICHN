import React from 'react';
import { Layout, Row, Col } from 'antd';
import MyInfo from './MyInfo';
import logoWhite from "../../../assets/img/png/Nichn.png"

import "./Footer.scss"

export default function Footer() {
    const { Footer } = Layout; 

    return (
        <Footer className="footer">
            <Row>
                <Col md={4}/>
                <Col md={16}>
                    <Row className="footer__logo" justify="center">
                        <Col md={8}><img src={logoWhite} alt="Nic"/></Col>
                        <Col md={8}>
                            <h1>OFICINAS <br/></h1>
                            <p>Colinas, Bloque RR, Casa 2016,<br/> Boulevard Francia, Tegucigalpa,<br/> Honduras.</p>
                        </Col>
                    </Row>
                    <Row justify="space-around" className="footer__copyright">
                        <Col md={4}>© TODOS LOS DERECHOS RESERVADOS</Col>
                        <Col md={4}>RED DE DESARROLLO SOSTENIBLE - RDS</Col>
                        <Col md={4}><MyInfo/></Col>
                    </Row>
                </Col>
                <Col md={4}/>
            </Row>
        </Footer>
    )
}
