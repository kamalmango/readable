import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment, commentVote } from '../../../actions/comments'
import { openEditModal } from '../../../actions/editModal'
import EditIcon from 'react-icons/lib/md/edit'
import DeleteIcon from 'react-icons/lib/md/delete'
import AngleUp from 'react-icons/lib/md/arrow-drop-up'
import AngleDown from 'react-icons/lib/md/arrow-drop-down'
import './styles.css'

class Comment extends Component {
  render() {
    const { comment, postId } = this.props
    return (
      <div className='comments'>
        <p className='commentBody'>{comment.body}</p>
        <div className='commentsInfo'>
          <p className='commentAuthor'>author: {comment.author} <span className='commentInfoLine'>|</span></p>
          <p className='commentDate'>posted on: {Date(comment.timestamp).toString().split(' ').slice(0,3).join(' ')} <span className='commentInfoLine'>|</span></p>
          <p className='commentVoteScore'>vote score:</p>
          <p className='commentMinus' onClick={() => this.props.commentVote(comment.id, postId, {option: 'downVote'})}><AngleDown size={25}/></p>
          <p>{comment.voteScore}</p>
          <p className='commentPlus' onClick={() => this.props.commentVote(comment.id, postId, {option: 'upVote'})}><AngleUp size={25}/></p>
        </div>
        <div className='commentOps'>
          <p className='commentEdit' onClick={() => this.props.openEditModal(comment.id, comment.body)}><EditIcon /> |</p>
          <p className='commentDelete' onClick={() => this.props.deleteComment(comment.id, postId)}><DeleteIcon /></p>
        </div>
      </div>
    )
  }
}

export default connect(null, { deleteComment, commentVote, openEditModal })(Comment)
