import React from "react";
import styled from "styled-components";

const CommentWrapper = styled.div`
    backround: white;
    padding: 1em;
    margin: 2em 0;
    background-color: rgb(245, 245, 245);
    border: 1px solid;
    box-shadow: 5px 10px rgb(112, 128, 144) inset;
    border-radius: 5%;
`;

const Comment = (props) => {
    
    const { name, body } = props;
    
    return (
        <CommentWrapper>
            <h3>{name}</h3> 
            <p>{body}</p> 
        </CommentWrapper>
    );
}

export default Comment;