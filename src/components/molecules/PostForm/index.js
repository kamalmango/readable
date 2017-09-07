import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

let PostForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="owner">Owner</label>
        <Field name="owner" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <Field name="body" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Field name="category" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'createPost'
})(PostForm)

export default PostForm