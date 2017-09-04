import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchPosts } from '../../../actions/posts'
import CommentList from '../../molecules/CommentList'

class PostDetail extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchPosts())
  // }
  render() {
    // console.log('hellloooo ', this.props)
    const post = this.props.posts[0]
    console.log('!!!!!!! ', this.props.comments)
    return (
      <div>
        <h1>Post Details</h1>
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.author}</p>
          <p>{post.timestamp}</p>
          <p>{post.voteScore}</p>
        </div>
        <CommentList comments={this.props.comments} postId={post.id} />
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
