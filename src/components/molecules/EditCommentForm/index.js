import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Modal from 'react-modal'
import { closeEditModal } from '../../../actions/editModal'
import MdClose from 'react-icons/lib/md/close'
import './styles.css'

let EditCommentForm = props => {
  const { handleSubmit } = props
  return (
    <Modal
      isOpen={true}
      contentLabel="Modal"
    >
      <p className='closeEdit' onClick={() => props.dispatch(closeEditModal())}><MdClose /></p>
      <form onSubmit={ handleSubmit }>
        <div className='editCommentField'>
          <label htmlFor="body">Body</label>
          <Field name="body" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  )
}

EditCommentForm = reduxForm({
  form: 'editComment'
})(EditCommentForm)

export default connect()(EditCommentForm)
