import React from 'react'

const PostList = ({posts}) => (
  <div>
    <h3>Posts</h3>
    <ul>
      {posts.map(item => (
        <li key={item.id}>
          {item.body}
        </li>
      ))}
    </ul>
  </div>
)

export default PostList
