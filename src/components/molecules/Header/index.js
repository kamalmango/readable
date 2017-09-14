import React, { Component } from 'react'
import CategoryList from '../CategoryList'
import { Link } from 'react-router-dom'
import './styles.css'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link className='brand' to='/'><h3>posts</h3></Link>
        <CategoryList />
      </div>
    )
  }
}

export default Header
