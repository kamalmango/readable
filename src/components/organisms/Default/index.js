import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../../actions/posts'
import PostList from '../../molecules/PostList'
import { Link } from 'react-router-dom'
import AddIcon from 'react-icons/lib/md/add'
import './styles.css'

class Default extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  
  render() {
    return (
      <div>
        <h2 className='postsTitle'>All Posts</h2>
        <PostList posts={this.props.posts} />
        <div>
          <Link to='/create'><AddIcon size={50}/></Link>
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

export default connect(mapStateToProps, { fetchPosts })(Default)
