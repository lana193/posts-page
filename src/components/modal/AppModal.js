import React, { useEffect, useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
import DeleteModalContent from "./DeleteModalContent";
import AddPostModalContent from "./AddPostModalContent";
import modalTypes from "./modalTypes";

const AppModal = ({ parentCallback = f => f, modalType, isOpen, deletePost, postId, editPost, createPost }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggle = () => setModalOpen(!modalOpen);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen])

    const handleClosed = () => {
        parentCallback && parentCallback();
    }

    const renderSwitch = (modalType, toggle) => {
        switch (modalType) {
            case modalTypes.DELETE_POST_MODAL:
                return <DeleteModalContent 
                          toggle={toggle} 
                          deletePost={deletePost}
                          postId={postId}
                       />;
            case modalTypes.EDIT_POST_MODAL:
                return <AddPostModalContent 
                          toggle={toggle} 
                          editPost={editPost}
                          postId={postId}
                       />;
            case modalTypes.ADD_POST_MODAL:
                return <AddPostModalContent 
                          toggle={toggle} 
                          createPost={createPost}
                       />;
        }
    }
    return (
        <Modal isOpen={modalOpen} toggle={toggle} className={"app-modal"} onClosed={handleClosed} centered>
            <ModalHeader toggle={toggle}>{modalType}</ModalHeader>
            {renderSwitch(modalType, toggle, deletePost, postId)}
        </Modal>
    )
}

export default AppModal;