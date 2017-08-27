import * as api from '../utils/api'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const receiveCategories = items => ({
  type: RECEIVE_CATEGORIES,
  categories: items.categories
})

export const fetchCategories = () => dispatch => (
  api
    .fetchCategories()
    // .then(categories => dispatch(receivecategories(categories)))
    .then(response => response.json().then(items =>  dispatch(receiveCategories(items))))
    // .then(categories => categories.json().then(item => console.log(item)))
)