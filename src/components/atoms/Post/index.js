import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postVote } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'
import { Link } from 'react-router-dom'
import AngleUp from 'react-icons/lib/md/arrow-drop-up'
import AngleDown from 'react-icons/lib/md/arrow-drop-down'
import { deletePost } from '../../../actions/posts'
import EditIcon from 'react-icons/lib/md/edit'
import DeleteIcon from 'react-icons/lib/md/delete'
import './styles.css'

class Post extends Component {
  componentDidMount() {
    this.props.dispatch(fetchComments(this.props.post.id))
  }

  render() {
    const { post, comments, detail } = this.props
    return (
      <div className='post'>
        <div className={detail ? 'postDetail' : 'postMain'}>
          {detail ? <h1 className='postDetailTitle'>{post.title}</h1> : <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>}
          <p className={detail ? 'postDetailBody' : 'postBody'}>{post.body}</p>
        </div>
        <div className={detail ? 'postDetailInfo' : 'postInfo'}>
          <p className='postInfoAuthor'>author: {post.author} <span className='lineDash'>|</span></p>
          <p className='commentNumber'><span className='commentsNumber'>{comments[post.id] && comments[post.id].length}</span> comments <span className='lineDash'>|</span></p>
          <p className='postDetailDate'>Posted on: {Date(post.timestamp).toString().split(' ').slice(0,3).join(' ')} <span className='lineDash'>|</span></p>
          <p className='voteScoreNum'>vote score:</p>
          <p className='postMinus' onClick={() => this.props.dispatch(postVote(post.id, {option: 'downVote'}))}><AngleDown size={25} /></p>
          <p className='scoreNumber'>{post.voteScore}</p>
          <p className='postPlus' onClick={() => this.props.dispatch(postVote(post.id, {option: 'upVote'}))}><AngleUp size={25} /></p>
        </div>
        <div className={detail ? 'postOps' : 'postOperations'}>
          <Link className='postEdit' to={`/edit/${post.id}`}><p className='editPost'><EditIcon /></p></Link>
          <Link className='postDelete' to='/' onClick={() => this.props.dispatch(deletePost(post.id))}><DeleteIcon /></Link>
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
