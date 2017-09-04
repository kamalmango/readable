import { RECEIVE_COMMENTS,
         ADD_TO_COMMENT_VOTESCORE,
         SUBTRACT_FROM_COMMENT_VOTESCORE } from '../actions/comments'

function comments(state = {}, action) {
  const { comments, postId, commentId } = action
  console.log('post id first ', postId)
  switch (action.type) {
    case RECEIVE_COMMENTS :
      return {
        ...state,
        [postId]: comments
      }
    case ADD_TO_COMMENT_VOTESCORE :
      console.log('jalskdjflkdjf ', state)
      console.log('post id ', action.postId)
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
    default:
      return state
  }
}

export default comments
