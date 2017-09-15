import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postVote } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'
import { Link } from 'react-router-dom'
import AngleUp from 'react-icons/lib/md/arrow-drop-up'
import AngleDown from 'react-icons/lib/md/arrow-drop-down'
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
          <p className='commentNumber'><span className='commentsNumber'>{comments[post.id] && comments[post.id].length}</span> comments <span className='lineDash'>|</span></p>
          <p className='voteScoreNum'>vote score:</p>
          <p className='postMinus' onClick={() => this.props.dispatch(postVote(post.id, {option: 'downVote'}))}><AngleDown size={25} /></p>
          <p className='scoreNumber'>{post.voteScore}</p>
          <p className='postPlus' onClick={() => this.props.dispatch(postVote(post.id, {option: 'upVote'}))}><AngleUp size={25} /></p>
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
