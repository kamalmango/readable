import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment, commentVote } from '../../../actions/comments'
import { openEditModal } from '../../../actions/editModal'
import EditIcon from 'react-icons/lib/md/edit'
import DeleteIcon from 'react-icons/lib/md/delete'
import './styles.css'

class Comment extends Component {
  render() {
    const { comment, postId } = this.props
    return (
      <div className='comments'>
        <p className='commentBody'>{comment.body}</p>
        <div className='commentsInfo'>
          <p className='commentAuthor'>author: {comment.author} |</p>
          <p className='commentDate'>posted on: {comment.timestamp} |</p>
          <p className='commentScore'>vote score: {comment.voteScore}</p>
          <p className='commentPlus' onClick={() => this.props.dispatch(commentVote(comment.id, postId, {option: 'upVote'}))}>+</p>
          <p className='commentMinus' onClick={() => this.props.dispatch(commentVote(comment.id, postId, {option: 'downVote'}))}>-</p>
        </div>
        <div className='commentOps'>
          <p className='commentEdit' onClick={() => this.props.dispatch(openEditModal(comment.id))}><EditIcon /> |</p>
          <p className='commentDelete' onClick={() => this.props.dispatch(deleteComment(comment.id, postId))}><DeleteIcon /></p>
        </div>
      </div>
    )
  }
}

export default connect()(Comment)
