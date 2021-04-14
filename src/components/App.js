import React from "react";
import PostsList from "../containers/posts";
import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const App = () => {
    return (
        <AppContainer>
            <PostsList/>
        </AppContainer>
    );
}

export default App;