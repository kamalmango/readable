import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOnePost } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'
import CommentList from '../../molecules/CommentList'
import { deletePost } from '../../../actions/posts'
import { Link } from 'react-router-dom'
import './styles.css'

class PostDetail extends Component {
  componentDidMount() {
    //this.props.dispatch(fetchOnePost(this.props.match.params.id))
    this.props.dispatch(fetchComments(this.props.match.params.id))
  }

  render() {
    const post = this.props.posts[0] || {}
    return (
      <div>
        <div>
          <h3>{post.title}</h3>
          <p className='postDetailBody'>{post.body}</p>
          <div className='postDetailInfo'>
            <p className='postDetailAuthor'>Author: {post.author} |</p>
            <p className='postDetailDate'>Posted on: {post.timestamp} |</p>
            <p className='postDetailScore'>vote score: {post.voteScore}</p>
          </div>
        </div>
        <div className='postOps'>
          <Link className='postDetailEdit' to={`/edit/${post.id}`}><p className='editPost'>Edit Post <span className='dash'>|</span></p></Link>
          <p className='postDetailDelete' onClick={() => this.props.dispatch(deletePost(post.id))}>Delete Post</p>
        </div>
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
