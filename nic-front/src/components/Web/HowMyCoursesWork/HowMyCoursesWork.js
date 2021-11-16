import React from 'react'
import { Row, Col, Card } from 'antd';
import { ClockCircleOutlined, KeyOutlined, MessageOutlined } from '@ant-design/icons';
import'./HowMyCoursesWork.scss'

export default function HowMyCoursesWork() {
    return (
       <Row className="how-my-courses-work">
           <Col lg={24}className="how-my-courses-work__title">
                <h2>Acerca de Nic.HN</h2>
                <h3>bewfdhfbdjcnsafhweufbnsd</h3>
           </Col>

           <Col lg={4}/>
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            icon={[<ClockCircleOutlined/>]}
                            title="Cursos y clases"
                            subtitle="jsdfndsjfnejfnerj"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={[<KeyOutlined />]}
                            title="Cursos y clases"
                            subtitle="jsdfndsjfnejfnerj"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={[<MessageOutlined />]}
                            title="Cursos y clases"
                            subtitle="jsdfndsjfnejfnerj"
                        />
                    </Col>
                </Row>
            </Col>

            <Col lg={4}/>

       </Row>
    );
}

function CardInfo(props){
    const { title, subtitle,icon } = props;
    const { Meta } = Card;
    
    return(
        <Card className="how-my-courses-work__card">
            <Meta avatar={icon} title={title} description={subtitle}/>
        </Card>
    )
}
