import React from 'react'
import { changePostsOrder } from '../../../actions/posts'
import { connect } from 'react-redux'
import Post from '../../atoms/Post'
import './styles.css'

const PostList = (props) => (
  <div className='posts'>
    <div className='vote'>
      <p>Order posts by: </p>
      <p className='voteScore' onClick={() => props.dispatch(changePostsOrder('voteScore'))}>VoteScore |</p>
      <p className='timeStamp' onClick={() => props.dispatch(changePostsOrder('timestamp'))}>timestamp</p>
    </div>
    <div>
      {props.posts.map(post => (
        !post.deleted && <Post post={post} key={post.id} />
      ))}
    </div>
  </div>
)

export default connect()(PostList)
