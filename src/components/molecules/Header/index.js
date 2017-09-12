import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryList from '../CategoryList'
import { Link } from 'react-router-dom'
import './styles.css'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link className="brand" to='/'><h3>readables</h3></Link>
        <CategoryList />
      </div>
    )
  }
}

export default Header