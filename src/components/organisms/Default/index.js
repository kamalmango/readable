import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/categories'
import { fetchPosts } from '../../../actions/posts'
import CategoryList from '../../molecules/CategoryList'

class Default extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchPosts())
  }

  render() {
    return (
      <div className='app'>
        ROOT
      </div>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts
  }
}

export default connect(mapStateToProps)(Default)