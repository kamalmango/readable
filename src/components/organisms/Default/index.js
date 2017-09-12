import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/categories'
import { fetchPosts } from '../../../actions/posts'
import CategoryList from '../../molecules/CategoryList'
import PostList from '../../molecules/PostList'
import { Link } from 'react-router-dom'

class Default extends Component {

  render() {
    return (
      <div>
        <PostList posts={this.props.posts} />
        <div>
          <Link to='/create'>Add a new post</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(Default)
