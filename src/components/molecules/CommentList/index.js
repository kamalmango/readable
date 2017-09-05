import React from 'react'
import { connect } from 'react-redux'
import Comment from '../../atoms/Comment'
import { changeCommentsOrder } from '../../../actions/comments'

const CommentList = (props) => (
  <div>
    <h3>Comments</h3>
    <div>
      <p onClick={() => props.dispatch(changeCommentsOrder('voteScore', props.postId))}>VoteScore</p>
      <p onClick={() => props.dispatch(changeCommentsOrder('timestamp', props.postId))}>timestamp</p>
    </div>
    <ul>
      {props.comments.map(comment => (
        <Comment comment={comment} key={comment.id} postId={props.postId} />
      ))}
    </ul>
  </div>
)

export default connect()(CommentList)
