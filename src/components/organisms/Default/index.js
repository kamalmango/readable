import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/categories'
import { fetchPosts } from '../../../actions/posts'
import CategoryList from '../../molecules/CategoryList'
import PostList from '../../molecules/PostList'
import { Link } from 'react-router-dom'

class Default extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchPosts())
  }

  render() {
    return (
      <div className='app'>
        <CategoryList categories={this.props.categories} />
        <PostList posts={this.props.posts} />
        <div>
          <Link to='/'>Add a new post</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts: posts.sort((a,b) => (b.voteScore - a.voteScore))
  }
}

export default connect(mapStateToProps)(Default)
