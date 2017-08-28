import React from 'react'

const PostList = ({posts}) => (
  <div>
    <h3>Posts</h3>
    <div>
      <p>VoteScore</p>
      <p>timestamp</p>
    </div>
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
