import React, { Component } from 'react'
import PostList from '../../molecules/PostList'
import { connect } from 'react-redux'
import CategoryList from '../../molecules/CategoryList'

class Category extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.match.params.id}</h3>
        <div>
          <PostList posts={this.props.posts} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ categories, posts }, props) {
  return {
    categories, 
    posts: posts.filter(post => post.category === props.match.params.id)
  }
}

export default connect(mapStateToProps)(Category)
