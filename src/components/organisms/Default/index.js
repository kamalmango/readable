import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/categories'
import { fetchPosts } from '../../../actions/posts'
import CategoryList from '../../molecules/CategoryList'
import PostList from '../../molecules/PostList'

class Default extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchPosts())
  }

  render() {
    console.log('!!!!!! ', this.props.posts)
    return (
      <div className='app'>
        <CategoryList categories={this.props.categories} />
        <PostList posts={this.props.posts} />
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
