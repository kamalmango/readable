import React, { Component } from 'react'
import PostForm from '../../molecules/PostForm'
import * as api from '../../../utils/api'
import uuidv4 from 'uuid/v4'

class CreatePost extends Component {
  submit = values => {
    values.timestamp = Date.now()
    values.id = uuidv4()
    console.log(values)
    api.postPost(values)
  }

  render() {
    return (
      <PostForm onSubmit={this.submit} />
    )
  }
}

export default CreatePost