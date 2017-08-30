import { RECEIVE_POSTS, CHANGE_POSTS_ORDER, 
				 FILTER_POSTS_BY_CATEGORY,
				 ADD_TO_POST_VOTESCORE,
				 SUBTRACT_FROM_POST_VOTESCORE } from '../actions/posts'

function posts(state = [], action) {
  const { posts, order, category, id } = action

  switch (action.type) {
    case RECEIVE_POSTS : 
      return posts
    case CHANGE_POSTS_ORDER :
     	return state.sort((a,b) => (b.order - a.order))
    case FILTER_POSTS_BY_CATEGORY : 
      return state.filter(item => item.category === category)
    case ADD_TO_POST_VOTESCORE : 
      // return state.map(post => 
      // 	(post.id === id)
      // 		? {...post, voteScore: post.voteScore++}
      // 		: post
      // )
      return state.map(post => {
      	if (post.id === id) {
      		console.warn('!!! ', post.voteScore)
      		return {...post, voteScore: post.voteScore+1}
      	} else {
      		return post
      	}
      })
    case SUBTRACT_FROM_POST_VOTESCORE : 
    	return state
    default :
      return state
  }
}

export default posts
