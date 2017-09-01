import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToPostVotescore, subractFromPostVotescore } from '../../../actions/posts'
import { fetchComments } from '../../../actions/comments'

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
      <li>
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{comments[post.id] && comments[post.id].length} comments</p>
        </div>
        <div>
          <p>vote score: {post.voteScore}</p>
          <p onClick={() => this.props.dispatch(addToPostVotescore(post.id))}>+</p>
          <p onClick={() => this.props.dispatch(subractFromPostVotescore(post.id))}>-</p>
        </div>
      </li>
    )
  }
}

function mapStateToProps({ comments }) {
  return {
    comments 
  }
}

export default connect(mapStateToProps)(Post)
