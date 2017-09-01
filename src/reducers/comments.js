import { RECEIVE_COMMENTS } from '../actions/comments'

function comments(state = {}, action) {
  const { comments, id } = action
  switch (action.type) {
    case RECEIVE_COMMENTS :
      return {
        ...state,
        [id]: comments
      }
    default:
      return state
  }
}

export default comments
