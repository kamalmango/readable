import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../../molecules/PostForm'
import * as api from '../../../utils/api'
import { postPost } from '../../../actions/posts'
import uuidv4 from 'uuid/v4'

class CreatePost extends Component {
  submit = values => {
    values.timestamp = Date.now()
    values.id = uuidv4()
    this.props.dispatch(postPost(values))
  }

  render() {
    return (
      <PostForm onSubmit={this.submit} />
    )
  }
}

export default connect()(CreatePost)
