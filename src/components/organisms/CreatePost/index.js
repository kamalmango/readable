import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../../molecules/PostForm'
import { postPost, putPost } from '../../../actions/posts'
import uuidv4 from 'uuid/v4'
import { Link } from 'react-router-dom'

class CreatePost extends Component {
  submit = values => {
    if (this.props.match.params.id) {
      this.props.dispatch(putPost(this.props.match.params.id, {title: values.title, body: values.body}))
    } else { 
      values.timestamp = Date.now()
      values.id = uuidv4()
      this.props.dispatch(postPost(values))
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <PostForm onSubmit={this.submit} post={this.props.posts[0] || {}} />
      </div>
    )
  }
}

function mapStateToProps({ posts }, props) {
  return {
    posts: posts.filter(post => post.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(CreatePost)
