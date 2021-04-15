import React from "react";
import { Button, ModalBody, ModalFooter } from "reactstrap";

const DeleteModalContent = ({ toggle, deletePost, postId }) => {
    const handleOkClick = () => {
        deletePost && deletePost(postId)
        toggle()
    }
    return (
        <>
            <ModalBody>
                <div className="inforamtion-modal-content">
                    Are you sure you want to delete post?
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleOkClick}>Ok</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </>
    )
}

export default DeleteModalContent;