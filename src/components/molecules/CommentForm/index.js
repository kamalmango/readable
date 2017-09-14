import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Modal from 'react-modal'
import { closeModal } from '../../../actions/Modal'
import MdClose from 'react-icons/lib/md/close'
import './styles.css'

let CommentForm = props => {
  const { handleSubmit } = props
  return (
    <Modal
      isOpen={true}
      contentLabel='Modal'
    >
      <p className='close' onClick={() => props.dispatch(closeModal())}><MdClose /></p>
      <form onSubmit={ handleSubmit }>
        <div className='commentField'>
          <label htmlFor="owner">Author</label>
          <Field name="author" component="input" type="text" />
        </div>
        <div className='commentField'>
          <label htmlFor="body">Body</label>
          <Field name="body" component="textarea" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  )
}

CommentForm = reduxForm({
  form: 'createComment'
})(CommentForm)

export default connect()(CommentForm)
