import React, { useEffect } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    column-gap: 1em;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-items: start;
`;

const PostsList = ({ handleGetPosts, selectedPosts }) => {

    useEffect(() => {
        !selectedPosts.length && handleGetPosts();
    }, [handleGetPosts, selectedPosts.length])

    return (
        <PostsContainer>
            {selectedPosts.map((item, i) => (
                <PostCard key={i} {...item} />
                )
            )}
        </PostsContainer>
    );
}

export default PostsList;