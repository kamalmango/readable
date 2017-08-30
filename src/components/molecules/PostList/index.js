import React from 'react'
import { changePostsOrder, addToPostVotescore, subractFromPostVotescore } from '../../../actions/posts'
import { connect } from 'react-redux'

const PostList = (props) => (
  <div>
    <h3>Posts</h3>
    <div>
      <p onClick={() => props.changePostsOrder('voteScore')}>VoteScore</p>
      <p onClick={() => props.changePostsOrder('timestamp')}>timestamp</p>
    </div>
    <ul>
      {props.posts.map(item => (
        <li key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
          <div>
            <p>vote score: {item.voteScore}</p>
            <p onClick={() => props.addToPostVotescore(item.id)}>+</p>
            <p onClick={() => props.subractFromPostVotescore(item.id)}>-</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

//////// maybe remove!!!! ///////////
function mapStateToProps({posts}) {
  return {
    posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changePostsOrder: (data) => dispatch(changePostsOrder(data)),
    addToPostVotescore: (data) => dispatch(addToPostVotescore(data)),
    subractFromPostVotescore: (data) => dispatch(subractFromPostVotescore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
