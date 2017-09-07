import * as api from '../utils/api'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const CHANGE_POSTS_ORDER = "CHANGE_POSTS_ORDER"
export const ADD_TO_POST_VOTESCORE = "ADD_TO_POST_VOTESCORE"
export const SUBTRACT_FROM_POST_VOTESCORE = "SUBTRACT_FROM_POST_VOTESCORE"
export const ADD_POST = "RECEIVE_ONE_POST"
export const DELETE_POST = "DELETE_POST"

export const fetchPosts = () => dispatch => (
  api
    .fetchPosts()
    .then(response => response.json())
    .then(posts =>  dispatch(receivePosts(posts)))
)

export const postPost = values => dispatch => (
  api
    .postPost(values)
    .then(response => response.json())
    .then(post => dispatch(addPost(post)))
)

export const deletePost = id => dispatch => (
  api.
    deletePost(id)
    .then(response => response)
    .then(results => {
      console.warn('resultsss ', results)
    })
)

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const addPost = post => ({
  type: ADD_POST,
  post
})

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
