import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
   handleGetPosts,
   handleGetPost,
   selectPosts,
   selectPost
} from "../../store/domains/posts";

import PostsList from "./PostsList";

const mapStateToProps = state => ({
   selectedPost: selectPost(state),
   selectedPosts: selectPosts(state)
});

 const mapDispatchToProps = dispatch => bindActionCreators({
   handleGetPost,
   handleGetPosts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);