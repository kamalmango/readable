import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Default from '../Default'
import Category from '../Category'
import Post from '../Post'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route exact path='/' component={Default} />
        <Route path='/category/:id' component={Category} />
        <Route path='/post' component={Post} />
      </div>
    )
  }
}

export default App
