import React from 'react'
import { changePostsOrder } from '../../../actions/posts'
import { connect } from 'react-redux'
import Post from '../../atoms/Post'
import './styles.css'

const PostList = (props) => (
  <div className='posts'>
    <div className='vote'>
      <p>Order posts by: </p>
      <p id='voteScore' className='voteScore bold' onClick={() => props.dispatch(changePostsOrder('voteScore'))}>VoteScore <span className='line'>|</span></p>
      <p id='timestamp' className='timeStamp' onClick={() => props.dispatch(changePostsOrder('timestamp'))}>timestamp</p>
    </div>
    <div>
      {props.posts.map(post => (
        !post.deleted && <Post post={post} key={post.id} />
      ))}
    </div>
  </div>
)

export default connect()(PostList)
