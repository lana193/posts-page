import React, { useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

import { capitalizeFirstLetter } from "../utils/capitilizeFirstLetter";
import { CommentsIcon, UpIcon, DownIcon, EditIcon, DeleteIcon } from "../icons/Icons";
import Comment from "./Comment";
import AppModal from "../components/modal/AppModal";
import modalTypes from "./modal/modalTypes";

const PostCardContainer = styled.div`
    padding: 1em 2em;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 15px;
    min-height: 324px;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;

    @media only screen and (max-width: 600px) {
        padding: 0.5em 1em;
    }

    .post-header {
        display: flex;
        justify-content: space-between;
        .title-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                cursor: pointer;
            }
        }
    }

    .post-footer {
        display: flex;
        justify-content: space-between;
        align-self: flex-end;
        
        .comments-wrapper {
            display: flex;
            align-items: center;

            span {
                margin: 5px;
                font-size: 12px;
                opacity: 0.8;
            }
        }
    }

    .comments-container {
        margin: 5px;
        padding: 0;
    }
`;

const handleGetTextToDisplay = (text, limitLength) => {
    if(text){
        let result = text.length >= limitLength ? text.substr(0, limitLength) : text
        return capitalizeFirstLetter(result)
    }
}

const PostCard = (props) => {
    const { 
            handleGetComments, 
            selectedComments, 
            handleDeletePost, 
            handleEditPost
         } = props;
    let body = handleGetTextToDisplay(props.body, 195);
    let title = handleGetTextToDisplay(props.title, 15);

    const originalBody = capitalizeFirstLetter(props.body);
    const originalTitle = capitalizeFirstLetter(props.title);

    const [ showTitle, setShowTitle ] = useState(false);
    const [ showBody, setShowBody ] = useState(false);
    const [ showComments, setShowComments ] = useState(false);
    
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ modalType, setModalType ] = useState(null);

    const toggleTitle = () => setShowTitle(!showTitle);
    const toggleBody = () => setShowBody(!showBody);
    const toggleComments = () => setShowComments(!showComments);

    const handleDeleteClick = () => {
        setModalType(modalTypes.DELETE_POST_MODAL);
        setModalOpen(true);
    }

    const handleEditClick = () => {
        setModalType(modalTypes.EDIT_POST_MODAL);
        setModalOpen(true);
    }

    const modalCallback = () => {
        setModalOpen(false)
    }

    const handleViewComments = () => {
        handleGetComments(props.id);
        toggleComments();
    }

    return (
        <PostCardContainer>
            <div className="post-header">
                <h3 className="post-title">{showTitle ? originalTitle : title}
                    {originalTitle.length > 20 && <span onClick={toggleTitle}>...</span>}
                </h3>
                <div>
                    <EditIcon onClick={handleEditClick}/>
                    <DeleteIcon onClick={handleDeleteClick}/>
                </div>   
            </div>
            <p>{showBody ? originalBody : body}</p>
            <div className="post-footer">
                <div>
                    {originalBody.length > 195 &&
                        <Button className="toggle-button" color="primary" onClick={toggleBody}>
                            {showBody ? "Read Less" : "Read More"}
                        </Button>
                    }
                </div>
                <div className="comments-wrapper">
                    <span>comments</span>
                    <CommentsIcon />
                    {showComments ? <UpIcon onClick={handleViewComments} /> : <DownIcon onClick={handleViewComments} />}
                </div>
            </div>
                {showComments && 
                    <div className="comments-container">
                        {selectedComments && selectedComments.map((comment, i) => {
                            if (comment.postId === props.id) {
                                return (
                                    <Comment key={i} {...comment} />
                                )}
                            }
                        )}
                    </div>
                }
                <AppModal 
                    modalType={modalType} 
                    isOpen={modalOpen} 
                    parentCallback={modalCallback}
                    deletePost={handleDeletePost}
                    editPost={handleEditPost}
                    postId={props.id}
                />
        </PostCardContainer>
    );
}

export default PostCard;