import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToPostVotescore, subtractFromPostVotescore, postVote } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    const { post, comments } = this.props
    return (
      <div>
        <div>
          <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
          <p>{post.body}</p>
          <p>{comments[post.id] && comments[post.id].length} comments</p>
        </div>
        <div>
          <p>vote score: {post.voteScore}</p>
          <p onClick={() => this.props.dispatch(postVote(post.id, {option: 'upVote'}))}>+</p>
          <p onClick={() => this.props.dispatch(postVote(post.id, {option: 'downVote'}))}>-</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return {
    comments 
  }
}

export default connect(mapStateToProps)(Post)
