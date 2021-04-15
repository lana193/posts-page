import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import AppModal from "../../components/modal/AppModal";
import modalTypes from "../../components/modal/modalTypes";

const PostsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 2em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .add-post-button {
        // cursor: pointer;
        font-size: 20px;
    }

    .posts-wrapper {
        margin-top: 50px;
        column-gap: 1em;
        padding: 5px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        align-items: start;
    }
`;

const PostsList = ({ handleGetPosts, selectedPosts, handleGetComments, selectedComments, handleDeletePost, handleEditPost, handleCreatePost }) => {
    useEffect(() => {
        !selectedPosts.length && handleGetPosts();
    }, [handleGetPosts, selectedPosts.length])
    const [addModalOpen, setAddmodalOpen] = useState(false)

    // const [modalOpen, setModalOpen] = useState(false);
    // const [modalType, setModalType] = useState(null);

    const handleAddClick = () => {
        // setModalType(modalTypes.ADD_POST_MODAL);
        // setModalOpen(true)
        setAddmodalOpen(true)
    }

    const modalCallback = () => {
        setAddmodalOpen(false)
    }

    return (
        <PostsContainer>
            <Button color="primary" onClick={handleAddClick} className="add-post-button">Add Post</Button>
            <div className="posts-wrapper">
                {selectedPosts && selectedPosts.map((post, i) => (
                    <PostCard
                        key={i}
                        {...post}
                        handleGetComments={handleGetComments}
                        selectedComments={selectedComments}
                        handleDeletePost={handleDeletePost}
                        handleEditPost={handleEditPost}
                    />)
                )}
            </div>

            <AppModal
                modalType={modalTypes.ADD_POST_MODAL}
                isOpen={addModalOpen}
                parentCallback={modalCallback}
                createPost={handleCreatePost}
            />
        </PostsContainer>
    );
}

export default PostsList;