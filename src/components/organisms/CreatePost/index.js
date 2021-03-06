import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../../molecules/PostForm'
import { postPost, putPost } from '../../../actions/posts'
import uuidv4 from 'uuid/v4'

class CreatePost extends Component {
  componentDidMount() {
    if (this.props.match.params.id && this.props.posts[0]) {
      if (this.props.posts[0].category === 'react') {
        document.getElementById('dropDown').selectedIndex = '1'
      } else if (this.props.posts[0].category === 'redux') {
        document.getElementById('dropDown').selectedIndex = '2'
      } else {
        document.getElementById('dropDown').selectedIndex = '3'
      }
    }
  }

  submit = values => {
    if (this.props.match.params.id) {
      this.props.history.push(`/post/${this.props.match.params.id}`)
      this.props.putPost(this.props.match.params.id, {title: values.title, body: values.body})
    } else { 
      this.props.history.push('/')
      values.timestamp = Date.now()
      values.id = uuidv4()
      this.props.postPost(values)
    }
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, { putPost, postPost })(CreatePost)
