export const selectPosts = state => state.postsReducer.posts;
export const selectPost = state => state.postsReducer.currentPost;
export const selectDeletedPost = state => state.postsReducer.deletedPost;
export const selectUpdatedPost = state => state.postsReducer.updatedPost;
export const selectCreatedPost = state => state.postsReducer.createdPost;