import React from 'react'
import { changePostsOrder } from '../../../actions/posts'
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
          {item.body}
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
    changePostsOrder: (data) => dispatch(changePostsOrder(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
