import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './styles.css'

const required = value => value ? undefined : 'Required'

let PostForm = props => {
  const { handleSubmit, post } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div className='field'>
        <label htmlFor="owner">Owner</label>
        <Field name="author" component="input" type="text" placeholder={post.author} />
      </div>
      <div className='field'>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" placeholder={post.title} />
      </div>
      <div className='field'>
        <label htmlFor="body">Body</label>
        <Field name="body" component="textarea" type="text" placeholder={post.body} />
      </div>
      <div className='field'>
        <label htmlFor="category">Category</label>
        <Field id='dropDown' name="category" component="select" type="text" validate={[required]}>
          <option></option>
          <option value='react'>React</option>
          <option value='redux'>Redux</option>
          <option value='udacity'>Udacity</option>
        </Field>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'createPost'
})(PostForm)

export default PostForm
