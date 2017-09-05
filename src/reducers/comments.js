import { RECEIVE_COMMENTS,
         ADD_TO_COMMENT_VOTESCORE,
         SUBTRACT_FROM_COMMENT_VOTESCORE,
         CHANGE_COMMENTS_ORDER } from '../actions/comments'

function comments(state = {}, action) {
  const { comments, postId, commentId, order } = action
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
    default:
      return state
  }
}

export default comments
