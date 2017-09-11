import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Modal from 'react-modal'
import { openModal, closeModal } from '../../../actions/Modal'

let CommentForm = props => {
  const { handleSubmit, comment } = props
  return (
    <Modal
      isOpen={true}
      contentLabel="Modal"
    >
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="owner">Author</label>
          <Field name="author" component="input" type="text" placeholder />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <Field name="body" component="input" type="text" placeholder />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p onClick={() => props.dispatch(closeModal())}>Close Modal</p>
    </Modal>
  )
}

CommentForm = reduxForm({
  form: 'createComment'
})(CommentForm)

export default connect()(CommentForm)