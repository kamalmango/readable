import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/categories'
import './styles.css'

class CategoryList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }

  render() {
    return (
       <div className='categories'>
        {this.props.categories.map(item => (
            <h3 className='category' key={item.name}>
              <Link to={`/category/${item.path}`}>{item.name}</Link>
            </h3>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ categories }, props) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(CategoryList)
