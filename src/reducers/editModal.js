import { OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL } from '../actions/editModal'

function editModal(state = {open: false, commentId: null, commentBody: null}, action) {
  switch (action.type) {
    case OPEN_EDIT_MODAL :
      return {
        ...state, 
        open: true,
        commentId: action.commentId,
        commentBody: action.commentBody
      }
    case CLOSE_EDIT_MODAL :
      return false
    default :
      return state
  }
}

export default editModal
