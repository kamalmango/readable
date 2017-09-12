import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Default from '../Default'
import Category from '../Category'
import PostDetail from '../PostDetail'
import CreatePost from '../CreatePost'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/categories'
import { fetchPosts } from '../../../actions/posts'
import { withRouter } from 'react-router-dom'
import Header from '../../molecules/Header'
import './styles.css'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchPosts())
  }
  
  render() {
    return (
      <div className='app'>
        <Header />
        <Route exact path='/' component={Default} />
        <Route path='/category/:id' component={Category} />
        <Route path='/post/:id' component={PostDetail} />
        <Route path='/create' component={CreatePost} />
        <Route path='/edit/:id' component={CreatePost} />
      </div>
    )
  }
}

export default withRouter(connect()(App))
