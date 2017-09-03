import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Default from '../Default'
import Category from '../Category'
import PostDetail from '../PostDetail'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/categories'
import { fetchPosts } from '../../../actions/posts'
import { withRouter } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchPosts())
  }
  
  render() {
    return (
      <div className='app'>
        <Route exact path='/' component={Default} />
        <Route path='/category/:id' component={Category} />
        <Route path='/post/:id' component={PostDetail} />
      </div>
    )
  }
}

export default withRouter(connect()(App))
