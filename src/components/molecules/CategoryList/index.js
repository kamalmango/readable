import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './styles.css'

const CategoryList = (props) => (
  <div className='categories'>
    {props.categories.map(item => (
        <h3 className='category' key={item.name}>
          <Link to={`/category/${item.path}`}>{item.name}</Link>
        </h3>
    ))}
  </div>
)

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(CategoryList)
