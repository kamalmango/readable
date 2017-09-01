import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Default from '../Default'
import Category from '../Category'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route exact path='/' component={Default} />
        <Route path='/category/:id' component={Category} />
      </div>
    )
  }
}

export default App
