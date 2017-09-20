import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../../atoms/Comment'
import CommentForm from '../CommentForm'
import EditCommentForm from '../EditCommentForm'
import { changeCommentsOrder, postComment, putComment } from '../../../actions/comments'
import { openModal, closeModal } from '../../../actions/modal'
import { closeEditModal } from '../../../actions/editModal'
import uuidv4 from 'uuid/v4'
import AddIcon from 'react-icons/lib/md/add'
import './styles.css'

class CommentList extends Component {
  submit = values => {
    values.timestamp = Date.now()
    values.id = uuidv4()
    values.parentId = this.props.postId
    this.props.postComment(values)
    this.props.closeModal()
  }

  submitEdit = values => {
    values.timestamp = Date.now()
    this.props.putComment(this.props.editModal.commentId, this.props.postId, values)
    this.props.closeEditModal()
  }

  render() {
    return (
      <div>
        <h3 className='commentsTitle'>Comments</h3>
        <div className='commentVote'>
          <p>Order comments by: </p>
          <p id='commentScore' className='commentScore commentBold' onClick={() => this.props.changeCommentsOrder('voteScore', this.props.postId)}>VoteScore <span className='commentDash'>|</span></p>
          <p id='commentTime' className='commentTime' onClick={() => this.props.changeCommentsOrder('timestamp', this.props.postId)}>timestamp</p>
        </div>
        <div>
          {this.props.comments.map(comment => (
            !comment.deleted && <Comment comment={comment} key={comment.id} postId={this.props.postId} />
          ))}
        </div>
        <p onClick={() => this.props.openModal()}><AddIcon size={50}/></p>
        {this.props.modal && <CommentForm onSubmit={this.submit} />}
        {this.props.editModal.open && <EditCommentForm onSubmit={this.submitEdit} />}
      </div>
    )
  }
}

function mapStateToProps({ modal, editModal }) {
  return {
    modal, 
    editModal
  }
}

export default connect(mapStateToProps, { changeCommentsOrder, postComment, putComment, openModal, closeModal, closeEditModal })(CommentList)
