import * as api from '../utils/api'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const ADD_TO_COMMENT_VOTESCORE = "ADD_TO_COMMENT_VOTESCORE"
export const SUBTRACT_FROM_COMMENT_VOTESCORE = "SUBTRACT_FROM_COMMENT_VOTESCORE"
export const CHANGE_COMMENTS_ORDER = "CHANGE_COMMENTS_ORDER"
export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const UPDATE_COMMENT = "UPDATE_COMMENT"

export const postComment = values => dispatch => (
  api
    .postComment(values)
    .then(response => response.json())
    .then(comment => dispatch(addComment(comment.parentId, comment)))
)

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

export const deleteComment = (commentId, postId) => dispatch => (
  api
    .deleteComment(commentId)
    .then(response => dispatch(removeComment(commentId, postId)))
)

export const putComment = (commentId, postId, values) => dispatch => (
  api
    .putComment(commentId, values)
    .then(response => response.json())
    .then(comment => dispatch(updateComment(postId, comment)))
)

export const commentVote = (commentId, postId, vote) => dispatch => (
  api
    .commentVote(commentId, vote)
    .then(response => {
      if (vote.option === 'upVote') {
        dispatch(addToCommentVotescore(commentId, postId))
      } else {
        dispatch(subtractFromCommentVotescore(commentId, postId))
      }
    })
)

export const addComment = (postId, comment) => ({
  type: ADD_COMMENT,
  postId,
  comment
})

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

export const changeCommentsOrder = (order, postId) => {  
  if (order === 'voteScore') {
    document.getElementById('commentScore').classList.add('commentBold')
    document.getElementById('commentTime').classList.remove('commentBold')
  } else {
    document.getElementById('commentTime').classList.add('commentBold')
    document.getElementById('commentScore').classList.remove('commentBold')
  }
  return {
    type: CHANGE_COMMENTS_ORDER,
    order,
    postId
  }
}

export const removeComment = (commentId, postId) => ({
  type: DELETE_COMMENT,
  commentId,
  postId
})

export const updateComment = (postId, comment) => ({
  type: UPDATE_COMMENT,
  postId,
  comment
})
