const api = "http://localhost:5001/"

export function fetchCategories() {
  return fetch(`${api}categories`, { headers: { 'Authorization': 'whatever-you-want' }})
}

export function fetchPosts() {
  return fetch(`${api}posts`, { headers: { 'Authorization': 'whatever-you-want' }})
}

export function fetchOnePost(id) {
  return fetch(`${api}posts/${id}`, { headers: { 'Authorization': 'whatever-you-want' }})
}

export function fetchComments(id) {
  return fetch(`${api}posts/${id}/comments`, { headers: { 'Authorization': 'whatever-you-want' }})
}

export function postPost(values) {
  return fetch(`${api}posts`, {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
}

export function deletePost(id) {
  return fetch(`${api}posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'whatever-you-want'
    }
  })
}

export function putPost(id, values) {
  return fetch(`${api}posts/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
}

export function postVote(id, vote) {
  return fetch(`${api}posts/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(vote)
  })
}

export function postComment(values) {
  return fetch(`${api}comments`, {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
}

export function deleteComment(id) {
  return fetch(`${api}comments/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'whatever-you-want'
    }
  })
}

export function commentVote(id, vote) {
  return fetch(`${api}comments/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(vote)
  })
}

export function putComment(id, values) {
  return fetch(`${api}comments/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
}

