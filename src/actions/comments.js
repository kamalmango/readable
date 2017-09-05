import * as api from '../utils/api'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const ADD_TO_COMMENT_VOTESCORE = "ADD_TO_COMMENT_VOTESCORE"
export const SUBTRACT_FROM_COMMENT_VOTESCORE = "SUBTRACT_FROM_COMMENT_VOTESCORE"
export const CHANGE_COMMENTS_ORDER = "CHANGE_COMMENTS_ORDER"

export const receiveComments = (comments, postId) => ({
  type: RECEIVE_COMMENTS,
  comments,
  postId
})

export const fetchComments = postId => dispatch => (
  api
    .fetchComments(postId)
    .then(response => response.json())
    .then(comments => dispatch(receiveComments(comments, postId)))
)

export const addToCommentVotescore = (commentId, postId) => ({
  type: ADD_TO_COMMENT_VOTESCORE,
  commentId, 
  postId
})

export const subtractFromCommentVotescore = (commentId, postId) => ({
  type: SUBTRACT_FROM_COMMENT_VOTESCORE,
  commentId,
  postId
})

export const changeCommentsOrder = (order, postId) => ({
  type: CHANGE_COMMENTS_ORDER,
  order,
  postId
})
