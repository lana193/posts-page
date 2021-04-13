import React, { useEffect } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
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