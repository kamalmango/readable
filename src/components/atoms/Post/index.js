import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToPostVotescore, subtractFromPostVotescore } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'
import { Link } from 'react-router-dom'

// const Post = (props) => (
//   <li>
//     <div>
//       <h3>{props.post.title}</h3>
//       <p>{props.post.body}</p>
//     </div>
//     <div>
//       <p>vote score: {props.post.voteScore}</p>
//       <p onClick={() => props.dispatch(addToPostVotescore(props.post.id))}>+</p>
//       <p onClick={() => props.dispatch(subractFromPostVotescore(props.post.id))}>-</p>
//     </div>
//   </li>
// )

class Post extends Component {
  componentDidMount() {
    this.props.dispatch(fetchComments(this.props.post.id))
  }

  render() {
    const { post, comments } = this.props
    return (
      <Link to={`/post/${post.id}`}>
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{comments[post.id] && comments[post.id].length} comments</p>
        </div>
        <div>
          <p>vote score: {post.voteScore}</p>
          <p onClick={() => this.props.dispatch(addToPostVotescore(post.id))}>+</p>
          <p onClick={() => this.props.dispatch(subtractFromPostVotescore(post.id))}>-</p>
        </div>
      </Link>
    )
  }
}

function mapStateToProps({ comments }) {
  return {
    comments 
  }
}

export default connect(mapStateToProps)(Post)
