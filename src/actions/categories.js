import * as api from '../utils/api'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"

export const receiveCategories = items => ({
  type: RECEIVE_CATEGORIES,
  categories: items.categories
})

export const fetchCategories = () => dispatch => (
  api
    .fetchCategories()
    .then(response => response.json())
    .then(items =>  dispatch(receiveCategories(items)))
)
