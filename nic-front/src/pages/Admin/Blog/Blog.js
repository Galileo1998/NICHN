import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { Button , notification } from "antd";
import queryString from "query-string";
import Modal from "../../../components/Modal";
import PostsList from '../../../components/Admin/Blog/PostsList/PostsList';
import Pagination from "../../../components/Pagination";
import AddEditPostForm from '../../../components/Admin/Blog/AddEditPostForm';

import "./Blog.scss";
import { getPostsApi } from '../../../api/post';

function Blog(props){
    
    const { location, history } = props;
    const [postt, setPostt] = useState(null);
    const [reloadPosts, setReloadPosts] = useState(false);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);
    const { page = 1 } = queryString.parse(location.search);

    useEffect(() => {
      getPostsApi(12, page)
        .then(response => {
          if (response?.code !== 200) {
            notification["warning"]({
              message: response.message
            });
          } else {
            setPostt(response.post);
          }
        })
        .catch(() => {
          notification["error"]({
            message: "Error del servidor."
          });
        });
      setReloadPosts(false);
    }, [page, reloadPosts]);

    const addPost = () => {
      setIsVisibleModal(true);
      setModalTitle("Creando nuevo post");
      setModalContent(<AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        postt={null}
      />);
    }

    const editPost = postt => {
      setIsVisibleModal(true);
      setModalTitle("Editar post");
      setModalContent(<AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        postt={postt}
      />);
    } 

    if(!postt){
        return null;
    }

    return (
        <div className="blog">
            <div className="blog__add-post">
                <Button type="primary" onClick={addPost}>
                    Nuevo Post
                </Button>
            </div>

            <PostsList postt={postt} setReloadPosts={setReloadPosts} editPost={editPost} />
            <Pagination postt={postt} location={location} history={history} />

            <Modal 
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                width="50%"
            >
              {modalContent}
            </Modal>
        </div>
    );
}

export default withRouter(Blog)
