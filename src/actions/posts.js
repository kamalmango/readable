import * as api from '../utils/api'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const CHANGE_POSTS_ORDER = "CHANGE_POSTS_ORDER"
export const ADD_TO_POST_VOTESCORE = "ADD_TO_POST_VOTESCORE"
export const SUBTRACT_FROM_POST_VOTESCORE = "SUBTRACT_FROM_POST_VOTESCORE"

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const fetchPosts = () => dispatch => (
  api
    .fetchPosts()
    .then(response => response.json())
    .then(posts =>  dispatch(receivePosts(posts)))
)

export const changePostsOrder = order => ({
	type: CHANGE_POSTS_ORDER,
	order
})

export const addToPostVotescore = id => ({
	type: ADD_TO_POST_VOTESCORE,
	id
})

export const subtractFromPostVotescore = id => ({
	type: SUBTRACT_FROM_POST_VOTESCORE,
	id
})
