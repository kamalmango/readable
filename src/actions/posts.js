import * as api from '../utils/api'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const CHANGE_POSTS_ORDER = "CHANGE_POSTS_ORDER"
export const ADD_TO_POST_VOTESCORE = "ADD_TO_POST_VOTESCORE"
export const SUBTRACT_FROM_POST_VOTESCORE = "SUBTRACT_FROM_POST_VOTESCORE"
export const ADD_POST = "RECEIVE_ONE_POST"
export const DELETE_POST = "DELETE_POST"
export const GET_POST = "GET_POST"
export const UPDATE_POST = "UPDATE_POST"

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

export const postVote = (id, vote) => dispatch => (
  api
    .postVote(id, vote)
    .then(response => {
      if (vote.option === 'upVote') {
        dispatch(addToPostVotescore(id))
      } else {
        dispatch(subtractFromPostVotescore(id))
      }
    })
)

export const putPost = (id, values) => dispatch => (
  api
    .putPost(id, values)
    .then(response => response.json())
    .then(post => dispatch(updatePost(post)))
)

export const deletePost = id => dispatch => (
  api
    .deletePost(id)
    .then(response => dispatch(deletePostAction(id)))
)

export const fetchOnePost = id => dispatch => (
  api
    .fetchOnePost(id)
    .then(response => response.json())
    .then(post => dispatch(getPost(post)))
)

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const getPost = post => ({
  type: GET_POST,
  post
})

export const updatePost = post => ({
  type: UPDATE_POST,
  post
})

export const addPost = post => ({
  type: ADD_POST,
  post
})

export const changePostsOrder = order => {
  if (order === 'voteScore') {
    document.getElementById(order).classList.add('bold')
    document.getElementById('timestamp').classList.remove('bold')
  } else {
    document.getElementById(order).classList.add('bold')
    document.getElementById('voteScore').classList.remove('bold')
  }
  return {
    type: CHANGE_POSTS_ORDER,
    order
  }
}

export const addToPostVotescore = id => ({
	type: ADD_TO_POST_VOTESCORE,
	id
})

export const subtractFromPostVotescore = id => ({
	type: SUBTRACT_FROM_POST_VOTESCORE,
	id
})

export const deletePostAction = id => ({
  type: DELETE_POST,
  id
})

