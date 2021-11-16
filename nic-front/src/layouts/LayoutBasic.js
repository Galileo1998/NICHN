import React from 'react';
import {Route,Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd/lib';
import MenuTop from '../components/Web/MenuTop/MenuTop';
import Footer from '../components/Web/Footer';

import './LayoutBasic.scss';
import { Content } from 'antd/lib/layout/layout';

export default function LayoutBasic(props){
    const {routes} = props;

    return(
        <>
         <Row>
            <Col md={4}/>
            <Col md={16}>
                <MenuTop/>
               
            </Col>
            <Col md={4}/>
         </Row>
         <LoadRouters routes={routes}/>
         <Footer/>
        </>
    );

}

function LoadRouters({routes}){

    return (
        <Switch>
           {routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))} 
        </Switch>
    );
}