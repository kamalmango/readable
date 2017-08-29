import { RECEIVE_POSTS, CHANGE_POSTS_ORDER } from '../actions/posts'

function posts(state = [], action) {
  const { posts, order } = action

  switch (action.type) {
    case RECEIVE_POSTS : 
      return posts
     case CHANGE_POSTS_ORDER :
     	 return state.sort((a,b) => (b.order - a.order))
     default :
       return state
  }
}

export default posts
