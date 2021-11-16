import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { signUpAdminApi } from '../../../../api/user';
import { getAccessTokenApi } from '../../../../api/auth';

import "./AddUserForm.scss";

export default function EditUserForm(props){
    const { setIsVisibleModal, setReloadUsers } =props;
    const [ userData, setUserData ] = useState({});

    const addUser = e => {
        if(!userData.name || !userData.lastname || !userData.email || !userData.password 
           || !userData.repeatpassword || !userData.role){
            notification["error"]({
                message: "Todos los campos son obligatorios."
            })
        }else if(userData.password !== userData.repeatpassword){
            notification["error"]({
                message: "Las contraseñas tienes que ser iguales."
            })
        }else{
            const accessToken = getAccessTokenApi();

            signUpAdminApi(accessToken, userData).then(response => {
                notification["success"]({
                    message: response
                })
                setIsVisibleModal(false);
                setReloadUsers(true);
                setUserData({})
            }).catch(err => {
                notification["error"]({
                    message: err
                })
            })
        }
    }
    return(
        <div className="add-user-form">
            <AddForm
                userData={userData}
                setUserData={setUserData}
                addUser={addUser}
            />
        </div>
    );
}

function AddForm(props){
    const { userData, setUserData, addUser } =props;
    const { Option } =Select;

    return (
        <Form className="form-add" onFinish={addUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="Nombre"
                            onChange={e => setUserData({ ...userData, name: e.target.value })}
                            value={userData.name}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="Apellidos"
                            onChange={e => setUserData({ ...userData, lastname: e.target.value })}
                            value={userData.lastname}
                        />
                    </Form.Item>
                </Col>  
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="Correo electronico"
                            onChange={e => setUserData({ ...userData, email: e.target.value })}
                            value={userData.email}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Selecciona un rol"
                            onChange={e => setUserData ({ ...userData, role: e })}
                            value={userData.role}
                        >
                            <Option value="admin">Administrador</Option>
                            <Option value="editor">Editor</Option>
                            <Option value="reviewer">Revisor</Option>
                        </Select>
                    </Form.Item>
                </Col>  
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input.Password
                            type="password"
                            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="Contraseña"
                            onChange={e => setUserData({ ...userData, password: e.target.value })}
                            value={userData.password}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                    <Input.Password
                            type="password"
                            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="Repetir Contraseña"
                            onChange={e => setUserData({ ...userData, repeatpassword: e.target.value })}
                            value={userData.repeatpassword}
                        />
                    </Form.Item>
                </Col>  
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Crear usuario
                </Button>
            </Form.Item>

        </Form>
    )
}

