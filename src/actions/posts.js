import * as api from '../utils/api'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const CHANGE_POSTS_ORDER = "CHANGE_POSTS_ORDER"
export const FILTER_POSTS_BY_CATEGORY = "FILTER_POSTS_BY_CATEGORY"
export const ADD_TO_POST_VOTESCORE = "ADD_TO_POST_VOTESCORE"
export const SUBTRACT_FROM_POST_VOTESCORE = "SUBTRACT_FROM_POST_VOTESCORE"

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

export const filterPostsByCategory = category => ({
  type: FILTER_POSTS_BY_CATEGORY,
  category
})

export const addToPostVotescore = id => ({
	type: ADD_TO_POST_VOTESCORE,
	id
})

export const subractFromPostVotescore = id => ({
	type: SUBTRACT_FROM_POST_VOTESCORE,
	id
})
