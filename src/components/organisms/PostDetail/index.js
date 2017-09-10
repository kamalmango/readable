import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOnePost } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'
import CommentList from '../../molecules/CommentList'
import { deletePost } from '../../../actions/posts'
import { Link } from 'react-router-dom'

class PostDetail extends Component {
  componentDidMount() {
    //this.props.dispatch(fetchOnePost(this.props.match.params.id))
    this.props.dispatch(fetchComments(this.props.match.params.id))
  }

  render() {
    const post = this.props.posts[0] || {}
    return (
      <div>
        <Link to='/'>Home</Link>
        <h1>Post Details</h1>
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.author}</p>
          <p>{post.timestamp}</p>
          <p>{post.voteScore}</p>
        </div>
        <Link to={`/edit/${post.id}`}>Edit Post</Link>
        <p onClick={() => this.props.dispatch(deletePost(post.id))}>Delete Post</p>
        <CommentList comments={this.props.comments || []} postId={post.id} />
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, props) {
  return {
    posts: posts.filter(post => post.id === props.match.params.id),
    comments: comments[props.match.params.id]
  }
}

export default connect(mapStateToProps)(PostDetail)
