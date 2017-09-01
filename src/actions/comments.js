import * as api from '../utils/api'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"

export const receiveComments = (comments, id) => ({
  type: RECEIVE_COMMENTS,
  comments,
  id
})

export const fetchComments = (id) => dispatch => (
  api
    .fetchComments(id)
    .then(response => response.json())
    .then(comments => dispatch(receiveComments(comments, id)))
)
