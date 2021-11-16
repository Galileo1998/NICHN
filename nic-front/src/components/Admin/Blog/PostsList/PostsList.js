import React from 'react'
import { List, Button, Modal, notification } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getAccessTokenApi } from "../../../../api/auth";
import { deletePostsApi } from '../../../../api/post';

import "./PostsList.scss";

const { confirm } = Modal;

export default function PostsList(props) {
    const { postt, setReloadPosts, editPost } = props;

    const deletePost = postt => {
        const accessToken = getAccessTokenApi();

        confirm({
            title: "Eliminando post",
            content: `¿Estas seguro de eliminar el post ${postt.title}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk(){
                deletePostsApi(accessToken, postt._id).then(response => {
                    const typeNotification = response.code === 200 ? "success" : "warning";
                    notification[typeNotification]({
                        message: response.message
                    });
                    setReloadPosts(true);
                }).catch(() => {
                    notification["error"]({
                        message: "Error del servidor."
                    })
                })
            }
        })
    }

    return (
        <div className="posts-list">
            <List
                dataSource={postt.docs}
                renderItem={postt => <Post postt={postt} deletePost={deletePost} editPost={editPost} />}
            />
        </div>
    )
}

function Post(props){
    const { postt, deletePost, editPost } = props;

    return (
        <List.Item actions={[

            <Link to = {`/blog/${postt.url}`} target="_blank">
                <Button type="primary">
                    <EyeOutlined />
                </Button>
            </Link>,
            <Button type="primary" onClick={() =>  editPost(postt) } >
                <EditOutlined />
            </Button>,
            <Button type="danger" onClick={() => deletePost(postt)}>
              <DeleteOutlined />
            </Button>
        ]}>
            <List.Item.Meta title={postt.title}/>
        </List.Item>
    )
}
