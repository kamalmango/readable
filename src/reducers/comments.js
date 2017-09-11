import { RECEIVE_COMMENTS,
         ADD_TO_COMMENT_VOTESCORE,
         SUBTRACT_FROM_COMMENT_VOTESCORE,
         CHANGE_COMMENTS_ORDER, 
         ADD_COMMENT,
         DELETE_COMMENT,
         UPDATE_COMMENT } from '../actions/comments'

function comments(state = {}, action) {
  const { comments, postId, commentId, order, comment } = action
  switch (action.type) {
    case RECEIVE_COMMENTS :
      return {
        ...state,
        [postId]: comments.sort((a,b) => (b.voteScore - a.voteScore))
      }
    case ADD_TO_COMMENT_VOTESCORE :
      return {
        ...state,
        [postId]: state[postId].map(comment => 
          (comment.id === commentId)
            ? {...comment, voteScore: comment.voteScore+1}
            : comment
        )
      }
    case SUBTRACT_FROM_COMMENT_VOTESCORE : 
      return {
        ...state,
        [postId]: state[postId].map(comment => 
          (comment.id === commentId)
            ? {...comment, voteScore: comment.voteScore-1}
            : comment
        )
      }
    case CHANGE_COMMENTS_ORDER : 
      let newState = [...state[postId]]
      return {
        ...state,
        [postId]: newState.sort((a,b) => (b[order] - a[order]))
      }
    case ADD_COMMENT : 
      let newCommentState = state[postId].concat(comment)
      return {
        ...state,
        [postId] : newCommentState
      }
    case DELETE_COMMENT : 
      return {
        ...state,
        [postId] : state[postId].map(comment => 
          (comment.id === commentId)
            ? {...comment, deleted: true}
            : comment
        )
      }
    case UPDATE_COMMENT :
      return {
        ...state,
        [postId] : state[postId].map(value => 
          (value.id === comment.id)
            ? comment
            : value
        )
      }
    default:
      return state
  }
}

export default comments
