import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { HomeOutlined, MenuOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import {Layout, Menu} from 'antd';

import './MenuSider.scss';

function MenuSider(props){
    const {menuCollapsed, location}=props;
    const{Sider} = Layout;
    
    return (
        <Sider className="admin-sider"collapsed={menuCollapsed}>
            <Menu theme="dark" mode ="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key="/admin">
                    <Link to={"/admin"}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/users">
                    <Link to={"/admin/users"}>
                        <UserOutlined />
                        <span className="nac-text">Usuarios</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/menu">
                    <Link to={"/admin/menu"}>
                        <MenuOutlined />
                        <span className="nac-text">Menu</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/blog">
                    <Link to={"/admin/blog"}>
                        <MessageOutlined />
                        <span className="nac-text">Blog</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default withRouter(MenuSider);