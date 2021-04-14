import React, { useState } from "react";
import styled from "styled-components";

import { capitalizeFirstLetter } from "../utils/capitilizeFirstLetter";
import { CommentsIcon, UpIcon, DownIcon } from "../icons/Icons";
import Comment from "./Comment";

const PostCardContainer = styled.div`
    padding: 1em 2em;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 15px;
    min-height: 220px;

    .title-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            cursor: pointer;
        }
    }

    .toggle-button {
        background-color: #2196F3;
        border-color: #2196F3;
        cursor: pointer;
    }

    .post-footer {
        display: flex;
        justify-content: space-between;

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
    const { handleGetComments, selectedComments } = props;
    let body = handleGetTextToDisplay(props.body, 195);
    let title = handleGetTextToDisplay(props.title, 20);

    const originalBody = capitalizeFirstLetter(props.body)
    const originalTitle = capitalizeFirstLetter(props.title)

    const [ showTitle, setShowTitle ] = useState(false);
    const [ showBody, setShowBody ] = useState(false);
    const [ showComments, setShowComments ] = useState(false);


    const toggleTitle = () => setShowTitle(!showTitle);
    const toggleBody = () => setShowBody(!showBody);
    const toggleComments = () => setShowComments(!showComments);

    const handleViewComments = () => {
        handleGetComments(props.id);
        toggleComments();
    }
    return (
        <PostCardContainer>
            <h2 className="post-title">{showTitle ? originalTitle : title}
                {originalTitle.length > 20 && <span onClick={toggleTitle}>...</span>}
            </h2>
            <p>{showBody ? originalBody : body}</p>
            <div className="post-footer">
                <div>
                    {originalBody.length > 195 &&
                        <button className="toggle-button" onClick={toggleBody}>
                            {showBody ? "Read Less" : "Read More"}
                        </button>
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
        </PostCardContainer>
    );
}

export default PostCard;