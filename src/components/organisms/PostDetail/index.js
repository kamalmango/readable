import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOnePost } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'
import CommentList from '../../molecules/CommentList'
import { deletePost } from '../../../actions/posts'
import { Link } from 'react-router-dom'
import EditIcon from 'react-icons/lib/md/edit'
import DeleteIcon from 'react-icons/lib/md/delete'
import './styles.css'

class PostDetail extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOnePost(this.props.match.params.id))
    this.props.dispatch(fetchComments(this.props.match.params.id))
  }

  render() {
    const post = this.props.posts[0] || {}
    return (
      <div>
        <div className='postDetail'>
          <h1 className='postDetailTitle'>{post.title}</h1>
          <p className='postDetailBody'>{post.body}</p>
          <div className='postDetailInfo'>
            <p className='postDetailAuthor'>Author: {post.author} |</p>
            <p className='postDetailDate'>Posted on: {Date(post.timestamp).toString().split(' ').slice(0,3).join(' ')} |</p>
            <p className='postDetailScore'>vote score: {post.voteScore}</p>
          </div>
        </div>
        <div className='postOps'>
          <Link className='postDetailEdit' to={`/edit/${post.id}`}><p className='editPost'><EditIcon /></p></Link>
          <Link className='postDetailDelete' to='/' onClick={() => this.props.dispatch(deletePost(post.id))}><DeleteIcon /></Link>
        </div>
        <CommentList comments={this.props.comments || []} postId={post.id} />
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, props) {
  return {
    posts,
    comments: comments[props.match.params.id]
  }
}

export default connect(mapStateToProps)(PostDetail)
