import React, { Component } from 'react'
import PostList from '../../molecules/PostList'
import { connect } from 'react-redux'
import { filterPostsByCategory } from '../../../actions/posts'
import CategoryList from '../../molecules/CategoryList'

// const Category = ({ match }) => (
//   <div>
//     <h3>{match.params.id}</h3>
//     <div>
//       <PostList />
//     </div>
//   </div>
// )

class Category extends Component {
  componentDidMount() {
    this.props.filterPostsByCategory(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h3>{this.props.match.params.id}</h3>
        <CategoryList categories={this.props.categories} />
        <div>
          <PostList />
        </div>
      </div>
    )
  }
}

function mapStateToProps({categories}) {
  return {
    categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    filterPostsByCategory: (data) => dispatch(filterPostsByCategory(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)