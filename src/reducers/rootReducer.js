import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import modal from './Modal'
import editModal from './editModal'

export default combineReducers({
  categories,
  posts,
  comments,
  modal,
  editModal,
  form: formReducer
})