import React from 'react';
import { Row, Col } from 'antd';
import RDS from '../../../assets/img/png/RDS-HN.png';
import Icann from '../../../assets/img/png/icann-NIC-HN.png';
import Lacnic from '../../../assets/img/png/lacnic-NIC-HN.png';
import Lactld from '../../../assets/img/png/lactld.png';
import Iana from '../../../assets/img/png/IANA.png';

import "./Logos.scss";

export default function Logos() {
    return (
        <div className="logos">
            <Row>
                <Col span={4}>
                    <img src={RDS} height="90" alt="rds"/>
                </Col>
                <Col span={4}>
                    <img src={Icann} height="80.6" alt="icann"/>
                </Col>
                <Col span={4}> 
                <img src={Lacnic} height="90.6" alt="lacnic"/>   
                </Col>
                <Col span={4}>
                  <img src={Lactld} height="96.56" alt="lactld"/>  
                </Col>
                <Col span={4}>
                    <img src={Iana} height="80.6" alt="iana"/>
                </Col>
            </Row>
        </div>
    )
}
