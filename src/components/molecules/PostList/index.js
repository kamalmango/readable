import React from 'react'
import { changePostsOrder } from '../../../actions/posts'
import { connect } from 'react-redux'
import Post from '../../atoms/Post'

const PostList = (props) => (
  <div>
    <h3>Posts</h3>
    <div>
      <p onClick={() => props.dispatch(changePostsOrder('voteScore'))}>VoteScore</p>
      <p onClick={() => props.dispatch(changePostsOrder('timestamp'))}>timestamp</p>
    </div>
    <ul>
      {props.posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  </div>
)

export default connect()(PostList)
