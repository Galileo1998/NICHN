import React, { useState, useEffect } from 'react';
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { getMenuApi } from "../../../api/menu";
import logoNIC from '../../../assets/img/png/Nichn.png'

import "./MenuTop.scss";
import SubMenu from 'antd/lib/menu/SubMenu';

export default function MenuTop(){
    const [menuData, setMenuData] = useState ([]);

    useEffect(() => {
        getMenuApi().then(response => {
            const arrayMenu = [];
            response.menu.forEach(item => {
                item.active && arrayMenu.push(item)
            });
            setMenuData(arrayMenu);
        });
    }, []);

    return(
        <Menu className="menu-top-web" mode="horizontal">
            <Menu.Item className="menu-top-web__logo">
                <Link to={"/"}>
                    <img src={logoNIC} alt="Logo Nic"/>
                </Link>
            </Menu.Item>
            <SubMenu title="SOMOS" className="menu-top-web__desplegable">
                <Menu.Item>Politicas</Menu.Item>
                <Menu.Item>Team</Menu.Item>
                <Menu.Item>I+D LAb</Menu.Item>
            </SubMenu>
            <Menu.Item>
                <Link to={"/"}>
                    <p>Dominios Registrados</p>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to={"/"}>
                    <p>FAQ</p>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to={"/"}>
                    <p>Registradores acreditados</p>
                </Link>
            </Menu.Item>

            {menuData.map(item => {
                const external = item.url.indexOf("http") > -1 ? true : false;

                if(external){
                    return(
                        <Menu.Item key ={item._id} className="menu-top-web__item">
                            <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                        </Menu.Item>
                    )
                }

                return(
                    <Menu.Item key={item._id} className="menu-top-web__item">
                        <Link to={item.url}>{item.title}</Link>
                    </Menu.Item>
                )
            })}
        </Menu>
    )
}