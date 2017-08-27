import React from 'react'

const CategoryList = ({ list }) => (
  <div>
    <h3>Categories</h3>
    <ul>
      {list.map(item => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default CategoryList