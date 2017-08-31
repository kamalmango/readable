import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CategoryList = (props) => (
  <div>
    <h3>Categories</h3>
    <ul>
      {props.categories.map(item => (
          <li key={item.name}>
            <Link to={`/category/${item.path}`}>{item.name}</Link>
          </li>
      ))}
    </ul>
  </div>
)

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(CategoryList)
