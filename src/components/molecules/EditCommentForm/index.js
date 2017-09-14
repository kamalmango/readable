import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Modal from 'react-modal'
import { closeEditModal } from '../../../actions/editModal'

let EditCommentForm = props => {
  const { handleSubmit } = props
  return (
    <Modal
      isOpen={true}
      contentLabel="Modal"
    >
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="body">Body</label>
          <Field name="body" component="input" type="text" placeholder />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p onClick={() => props.dispatch(closeEditModal())}>Close Modal</p>
    </Modal>
  )
}

EditCommentForm = reduxForm({
  form: 'editComment'
})(EditCommentForm)

export default connect()(EditCommentForm)
