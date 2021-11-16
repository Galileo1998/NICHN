import { Button } from 'antd';
import { MenuFoldOutlined,MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import React from 'react';
import Niclogo from '../../../assets/img/png/punto hn.png';
import { logout } from '../../../api/auth';

import './MenuTop.scss'

export default function MenuTop(props){
    const{menuCollapsed, setMenuCollapsed}= props;
    const Menu = menuCollapsed ? MenuFoldOutlined: MenuUnfoldOutlined;

    const logoutUser = () => {
        logout();
        window.location.reload();
    }

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                     onClick={()=>"/admin"}
                     className="menu-top__left-logo"
                     src={Niclogo}
                     alt="niclogo"
                />
                <Button type="link" onClick={()=>setMenuCollapsed(!menuCollapsed)}>
                     <Menu/>
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={logoutUser}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}
