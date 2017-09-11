import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCommentVotescore, subtractFromCommentVotescore, deleteComment, commentVote } from '../../../actions/comments'
import { openEditModal, closeEditModal } from '../../../actions/editModal'

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
          <p onClick={() => this.props.dispatch(commentVote(comment.id, postId, {option: 'upVote'}))}>+</p>
          <p onClick={() => this.props.dispatch(commentVote(comment.id, postId, {option: 'downVote'}))}>-</p>
        </div>
        <p onClick={() => this.props.dispatch(openEditModal(comment.id))}>Edit Comment</p>
        <p onClick={() => this.props.dispatch(deleteComment(comment.id, postId))}>Delete Comment</p>
      </div>
    )
  }
}

export default connect()(Comment)
