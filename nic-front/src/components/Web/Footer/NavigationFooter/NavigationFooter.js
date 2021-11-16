import React from 'react';
import { Row, Col } from 'antd';
import { BookOutlined, CodeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './NavigationFooter.scss';

export default function NavigationFooter() {
    return (
        <Row className="navigation-footer">
            <Col>
                <h3>Navegacion</h3>
            </Col>
            <Col md={12}>
                <RenderListLeft/> 
            </Col>
            <Col md={12}>
                ...
            </Col>
        </Row>
    );
}

function RenderListLeft(){
    return(
        <ul>
            <li>
                <BookOutlined /> Cursos Online
            </li>
            <li>
                <Link to ="/contact">
                    <CodeOutlined /> Desarrollo Web
                </Link>
            </li>
        </ul>
    )
}
