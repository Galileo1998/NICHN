import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Input, Button, DatePicker, notification } from "antd";
import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons';
import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";
import { getAccessTokenApi } from '../../../../api/auth';
import { addPostApi, updatePostApi } from '../../../../api/post';

import "./AddEditPostForm.scss";

export default function AddEditPostForm(props) {
    const { setIsVisibleModal, setReloadPosts, postt , setModalTitle } = props;
    const [postData, setPostData] = useState({});

    useEffect(() => {
        if(postt){
            setPostData(postt)
        }else{
            setPostData({});
        }
    }, [postt]);

    const processPost = e => {

        const {title, url, description, date } = postData;

        if(!title || !url || !description || !date){
            notification["error"]({
                message: "Todos los campos son obligatorios"
            });
        }else{
            if(!postt){
                addPost();
            }else{
                updatePost(); 
            }
        }

       
    }

    const addPost = () => {
        const token = getAccessTokenApi();

        addPostApi(token, postData).then(response => {
            const  typeNotification = response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
                message: response.message
            });
            setIsVisibleModal(false);
            setReloadPosts(true);
            setPostData({})
        }).catch(() => {
            notification["error"]({
                message: "Error del servidor."
            })
        })
    }

    const updatePost = () => {
        const token= getAccessTokenApi();
        updatePostApi(token, postt._id, postData).then(response => {
            const typeNotification = response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
                message: response.message
            });
            setIsVisibleModal(false);
            setReloadPosts(true);
            setPostData({});
        }).catch(() => {
            notification["error"]({
                message: "Error del servidor"
            })
        })
    }

    return (
        <div className="add-edit-post-form">
            <AddEditForm postData={postData} setPostData={setPostData} postt={postt} processPost={processPost} />
        </div>
    );

    function AddEditForm(props){
        const {postData, setPostData, postt, processPost} = props;

        return(
            <Form className="add-edit-post-form" layout="inline" onFinish={processPost}>
                <Row gutter={24}>
                    <Col span={8}>
                        <Input prefix={<FontSizeOutlined />} 
                               placeholder="Titulo"
                               value={postData.title}
                               id="titulo"
                               onChange={e => setPostData({ ...postData, title: e.target.value })}
                        />
                    </Col>
                    <Col span={8}>
                        <Input prefix={<LinkOutlined />}
                               disabled={false} 
                               placeholder="url"
                               value={postData.url}
                               id="url"
                               onChange={e => setPostData({ ...postData, url: transformTexttoUrl(e.target.value) })}    
                        />
                    </Col>
                    <Col span={8}>
                        <DatePicker
                            style={{width: "100%"}}
                            format="DD/MM/YYYY HH:mm:ss"
                            placeholder="Fecha de publicacion"
                            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss")}}
                            value={ postData.date && moment(postData.date)}
                            onChange={(e, value) => setPostData({...postData, date:moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()})}
                        />
                    </Col>
                    
                </Row>
                <Editor
                    initialValue={postData.description ? postData.description : ""}
                    init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onChange={e => setPostData({...postData, description: e.target.getContent()})}
                />

                <Button type="primary" htmlType="submit" className="btn-submit">
                    {postt ? "Actualizar post" : "Crear post"}
                </Button>

            </Form>
        )
    }
}

function transformTexttoUrl(text){
   const url = text.replace(" ","-");
   return url.toLowerCase(); 
}


