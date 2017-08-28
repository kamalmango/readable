import React from 'react'

const Category = ({ match }) => (
  <div>
    {match.params.id}
  </div>
)

export default Category