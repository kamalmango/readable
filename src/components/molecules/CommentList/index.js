import React from 'react'
import { connect } from 'react-redux'
import Comment from '../../atoms/Comment'

const CommentList = (props) => (
  <div>
    <h3>Comments</h3>
    <ul>
      {props.comments.map(comment => (
        <Comment comment={comment} key={comment.id} postId={props.postId} />
      ))}
    </ul>
  </div>
)

export default connect()(CommentList)
