export const OPEN_EDIT_MODAL = "OPEN_EDIT_MODAL"
export const CLOSE_EDIT_MODAL = "CLOSE_EDIT_MODAL"

export const openEditModal = (commentId) => ({
  type: OPEN_EDIT_MODAL,
  commentId
})

export const closeEditModal = () => ({
  type: CLOSE_EDIT_MODAL
})