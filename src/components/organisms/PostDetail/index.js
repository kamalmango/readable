import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOnePost } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'
import CommentList from '../../molecules/CommentList'
import Post from '../../atoms/Post'
import './styles.css'

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchOnePost(this.props.match.params.id)
    this.props.fetchComments(this.props.match.params.id)
  }

  render() {
    const post = this.props.posts[0] || {}
    return (
      <div>
        {Object.keys(post).length > 0 ? 
          <div>
            <Post post={post} detail />
            <CommentList comments={this.props.comments || []} postId={post.id} />
          </div> :
          <div>
            <p>Post Not Found</p>
          </div>}
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, props) {
  return {
    posts,
    comments: comments[props.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchComments, fetchOnePost })(PostDetail)
