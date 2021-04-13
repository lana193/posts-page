import React from "react";
import styled from "styled-components";

const PostCardContainer = styled.div`
    padding: 1em 2em;
    margin: 2em;
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const PostCard = (props) => {

    return (
        <PostCardContainer>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </PostCardContainer>
    );
}

export default PostCard;