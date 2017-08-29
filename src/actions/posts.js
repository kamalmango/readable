import * as api from '../utils/api'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const CHANGE_POSTS_ORDER = "CHANGE_POSTS_ORDER"

export const receivePosts = items => ({
  type: RECEIVE_POSTS,
  posts: items
})

export const fetchPosts = () => dispatch => (
  api
    .fetchPosts()
    // .then(categories => dispatch(receivecategories(categories)))
    .then(response => response.json().then(items =>  dispatch(receivePosts(items))))
    // .then(response => response.json().then(item => console.log('!!!!! ', item)))
    // .then(response => console.log('!!!!!! ', response.json()))
)

export const changePostsOrder = order => ({
	type: CHANGE_POSTS_ORDER,
	order
})
