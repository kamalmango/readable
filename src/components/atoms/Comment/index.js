import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCommentVotescore, subtractFromCommentVotescore } from '../../../actions/comments'

class Comment extends Component {
  render() {
    const { comment, postId } = this.props
    return (
      <div>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
        <p>{comment.timestamp}</p>
        <div>
          <p>vote score: {comment.voteScore}</p>
          <p onClick={() => this.props.dispatch(addToCommentVotescore(comment.id, postId))}>+</p>
          <p onClick={() => this.props.dispatch(subtractFromCommentVotescore(comment.id, postId))}>-</p>
        </div>
      </div>
    )
  }
}

export default connect()(Comment)
