import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import AppModal from "../../components/modal/AppModal";
import modalTypes from "../../components/modal/modalTypes";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";

const PostPageContainer = styled.div`
    width: 100%;
    padding: 2em;
    display: grid;
    grid-template-columns: 1fr 3fr;

    .filter-container {
        border-right: 1px solid grey;
        width: 100%;
        pading: 2em;
    }

    .posts-container {
        padding: 1em;

        .add-post-button {
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

    }
`;

const PostsList = ({ 
    handleGetPosts, 
    selectedPosts, 
    handleGetComments, 
    selectedComments, 
    handleDeletePost, 
    handleEditPost, 
    handleCreatePost,
    handleGetUsers,
    selectedUsersNames
 }) => {

    useEffect(() => {
        !selectedPosts.length && handleGetPosts();
    }, [handleGetPosts, selectedPosts.length])

    useEffect(() => {
        !selectedUsersNames.length && handleGetUsers();
    }, [handleGetUsers, selectedUsersNames.length])

    const [addModalOpen, setAddmodalOpen] = useState(false)
    const [checkedPosts, setCheckedPosts] = useState([])

    const handleAddClick = () => {
        setAddmodalOpen(true)
    }

    const modalCallback = () => {
        setAddmodalOpen(false)
    }

    const displayingPosts = checkedPosts.length > 0 ? checkedPosts: selectedPosts

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage ] = useState(9);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = displayingPosts.slice(indexOfFirstPost, indexOfLastPost);

    console.log("indexOfLastPost", indexOfLastPost);
    console.log("indexOfFirstPost", indexOfFirstPost);
    console.log("currentPosts", currentPosts);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <PostPageContainer>
            <div className="filter-container">
                <h2>Filter options</h2>
                <p>Filter post by autor</p>
                {selectedUsersNames && selectedUsersNames.map((user, i) => (
                    <Filter 
                        key={i} 
                        user={user} 
                        selectedPosts={selectedPosts}
                        checkedPosts={checkedPosts}
                        setCheckedPosts={setCheckedPosts}
                    />
                ))}
            </div>
            <div className="posts-container">
                <div>
                    <Button color="primary" onClick={handleAddClick} className="add-post-button">Add Post</Button>
                </div>

                <div className="posts-wrapper">
                    {currentPosts && currentPosts.map((post, i) => (
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
                <Pagination 
                    postsPerPage={postsPerPage} 
                    totalPosts={displayingPosts.length} 
                    paginate={paginate}
                    currentPage={currentPage}
                 />

                <AppModal
                    modalType={modalTypes.ADD_POST_MODAL}
                    isOpen={addModalOpen}
                    parentCallback={modalCallback}
                    createPost={handleCreatePost}
                />
            </div>
        </PostPageContainer>
    );
}

export default PostsList;