import { RECEIVE_POSTS, CHANGE_POSTS_ORDER, FILTER_POSTS_BY_CATEGORY } from '../actions/posts'

function posts(state = [], action) {
  const { posts, order, category } = action

  switch (action.type) {
    case RECEIVE_POSTS : 
      return posts
     case CHANGE_POSTS_ORDER :
     	 return state.sort((a,b) => (b.order - a.order))
      case FILTER_POSTS_BY_CATEGORY : 
        return state.filter(item => item.category === category)
     default :
       return state
  }
}

export default posts
