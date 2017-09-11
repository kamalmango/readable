import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../../atoms/Comment'
import CommentForm from '../CommentForm'
import EditCommentForm from '../EditCommentForm'
import { changeCommentsOrder, postComment, putComment } from '../../../actions/comments'
import { openModal, closeModal } from '../../../actions/Modal'
import { openEditModal, closeEditModal } from '../../../actions/editModal'
import uuidv4 from 'uuid/v4'

class CommentList extends Component {
  submit = values => {
    values.timestamp = Date.now()
    values.id = uuidv4()
    values.parentId = this.props.postId
    this.props.dispatch(postComment(values))
    this.props.dispatch(closeModal())
  }

  submitEdit = values => {
    values.timestamp = Date.now()
    this.props.dispatch(putComment(this.props.editModal.commentId, this.props.postId, values))
    this.props.dispatch(closeEditModal())
  }

  render() {
    return (
      <div>
        <h3>Comments</h3>
        <div>
          <p onClick={() => this.props.dispatch(changeCommentsOrder('voteScore', this.props.postId))}>VoteScore</p>
          <p onClick={() => this.props.dispatch(changeCommentsOrder('timestamp', this.props.postId))}>timestamp</p>
        </div>
        <ul>
          {this.props.comments.map(comment => (
            !comment.deleted && <Comment comment={comment} key={comment.id} postId={this.props.postId} />
          ))}
        </ul>
        <p onClick={() => this.props.dispatch(openModal())}>Add a Comment</p>
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

export default connect(mapStateToProps)(CommentList)
