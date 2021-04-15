import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
   handleGetPosts,
   handleGetPost,
   handleDeletePost,
   selectPosts,
   selectPost,
   selectDeletedPost,
   handleEditPost,
   selectUpdatedPost,
   handleCreatePost,
   selectCreatedPost
} from "../../store/domains/posts";

import { 
   handleGetComments,
   selectComments
} from "../../store/domains/comments";

import PostsList from "./PostsList";

const mapStateToProps = state => ({
   selectedPost: selectPost(state),
   selectedPosts: selectPosts(state),
   selectedDeletedPost: selectDeletedPost(state),
   selectedUpdatedPost: selectUpdatedPost(state),
   selectedCreatedPost: selectCreatedPost(state),
   selectedComments: selectComments(state)
});

 const mapDispatchToProps = dispatch => bindActionCreators({
   handleGetPost,
   handleGetPosts,
   handleDeletePost,
   handleEditPost,
   handleCreatePost,
   handleGetComments
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);