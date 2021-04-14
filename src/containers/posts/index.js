import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
   handleGetPosts,
   handleGetPost,
   selectPosts,
   selectPost
} from "../../store/domains/posts";

import { 
   handleGetComments,
   selectComments
} from "../../store/domains/comments";

import PostsList from "./PostsList";

const mapStateToProps = state => ({
   selectedPost: selectPost(state),
   selectedPosts: selectPosts(state),
   selectedComments: selectComments(state)
});

 const mapDispatchToProps = dispatch => bindActionCreators({
   handleGetPost,
   handleGetPosts,
   handleGetComments
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);