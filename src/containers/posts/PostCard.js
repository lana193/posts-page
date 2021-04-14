import React, { useState } from "react";
import styled from "styled-components";
import { capitalizeFirstLetter } from '../../utils/capitilizeFirstLetter'

const PostCardContainer = styled.div`
    padding: 1em 2em;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 15px;
    min-height: 220px;
    .title-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            cursor: pointer;
        }
    }

    .toggle-button {
        background-color: #2196F3;
        border-color: #2196F3;
        cursor: pointer;
    }

    span {
        cursor: pointer;
    }
`;

const handleGetTextToDisplay = (text, limitLength) => {
    if(text){
        let result = text.length >= limitLength ? text.substr(0, limitLength) : text
        return capitalizeFirstLetter(result)
    }
}

const PostCard = (props) => {
    let body = handleGetTextToDisplay(props.body, 195);
    let title = handleGetTextToDisplay(props.title, 20);

    const originalBody = capitalizeFirstLetter(props.body)
    const originalTitle = capitalizeFirstLetter(props.title)

    const [showTitle, setShowTitle] = useState(false);
    const [showBody, setShowBody] = useState(false);


    const toggleTitle = () => setShowTitle(!showTitle);
    const toggleBody = () => setShowBody(!showBody);

    return (
        <PostCardContainer>
            <h2 className="post-title">{showTitle ? originalTitle : title}
                {originalTitle.length > 20 && <span onClick={toggleTitle}>...</span>}
            </h2>
            <p>{showBody ? originalBody : body}</p>
            {originalBody.length > 195 &&
                <button className='toggle-button' onClick={toggleBody}>
                    {showBody ? 'Read Less' : 'Read More'}
                </button>
            }
        </PostCardContainer>
    );
}

export default PostCard;