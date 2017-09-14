import React, { Component } from 'react'
import PostList from '../../molecules/PostList'
import { fetchPosts } from '../../../actions/posts'
import { connect } from 'react-redux'
import './styles.css'

class Category extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }

  render() {
    return (
      <div>
        <h2 className='categoryTitle'>{this.props.match.params.id}</h2>
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
