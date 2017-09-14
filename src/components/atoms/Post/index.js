import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postVote } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'
import { Link } from 'react-router-dom'
import './styles.css'

class Post extends Component {
  componentDidMount() {
    this.props.dispatch(fetchComments(this.props.post.id))
  }

  render() {
    const { post, comments } = this.props
    return (
      <div className='post'>
        <div className='postMain'>
          <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
          <p className='postBody'>{post.body}</p>
        </div>
        <div className='postInfo'>
          <p className='commentNumber'>{comments[post.id] && comments[post.id].length} comments |</p>
          <p className='voteScoreNum'>vote score: {post.voteScore}</p>
          <p className='postMinus' onClick={() => this.props.dispatch(postVote(post.id, {option: 'downVote'}))}>-</p>
          <p className='postPlus' onClick={() => this.props.dispatch(postVote(post.id, {option: 'upVote'}))}>+</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return {
    comments 
  }
}

export default connect(mapStateToProps)(Post)
