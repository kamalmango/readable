import React from 'react'
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

export default CategoryList
