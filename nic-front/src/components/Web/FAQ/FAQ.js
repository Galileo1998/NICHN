import React from 'react';
import { Row, Col, Collapse, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import "./FAQ.scss";


export default function FAQ() {

    const { Panel } = Collapse;
     
    return (
        <Row className="faq">
            <Col span={24} className="faq__title">
            <h2>Preguntas frecuentes</h2>
            <h3>Estamos para ayudarte</h3>
            </Col>
            <Row gutter={60}>
                <Col span={8} className="faq__col1">
                 <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
                >
                <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                   <p>Hola</p>
                      </Panel>                      
                       <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
                    <p>sadd</p>                     
                    </Panel>
                    <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
                     <p>asdsdjbds</p>
                    </Panel>
                    </Collapse>
                    </Col>
                    <Col span={8} className="faq__col1">
                    <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
                >
                <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                   <p>Hola</p>
                      </Panel>                      
                       <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
                    <p>sadd</p>                     
                    </Panel>
                    <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
                     <p>asdsdjbds</p>
                    </Panel>
                    </Collapse>
                    </Col>
                    <Col span={8} className="faq__col1">
                    <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
                >
                <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                   <p>Hola</p>
                      </Panel>                      
                       <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
                    <p>sadd</p>                     
                    </Panel>
                    <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
                     <p>asdsdjbds</p>
                    </Panel>
                    </Collapse>
                    
                    </Col>
                    </Row>                                           
        </Row>
        
    )
}
