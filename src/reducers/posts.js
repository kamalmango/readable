import { RECEIVE_POSTS, CHANGE_POSTS_ORDER, 
				 ADD_TO_POST_VOTESCORE,
				 SUBTRACT_FROM_POST_VOTESCORE } from '../actions/posts'

function posts(state = [], action) {
  const { posts, order, id } = action

  switch (action.type) {
    case RECEIVE_POSTS : 
      return posts.sort((a,b) => (b.voteScore - a.voteScore))
    case CHANGE_POSTS_ORDER :
      let newState = [...state]
     	return newState.sort((a,b) => (b[order] - a[order]))
    case ADD_TO_POST_VOTESCORE : 
      return state.map(post => 
      	(post.id === id)
      		? {...post, voteScore: post.voteScore+1}
      		: post
      )
    case SUBTRACT_FROM_POST_VOTESCORE : 
    	return state.map(post => 
        (post.id === id)
          ? {...post, voteScore: post.voteScore-1}
          : post
      )
    default :
      return state
  }
}

export default posts
