const api = "http://localhost:5001/"

export function fetchCategories() {
  return fetch(`${api}categories`, { headers: { 'Authorization': 'whatever-you-want' }})
}

export function fetchPosts() {
  return fetch(`${api}posts`, { headers: { 'Authorization': 'whatever-you-want' }})
}

export function fetchComments(id) {
  return fetch(`${api}posts/${id}/comments`, { headers: { 'Authorization': 'whatever-you-want' }})
}

export function postPost(values) {
  console.warn('vallluuueeeesssss', values)
  return fetch(`${api}posts`, {
    method: 'POST',
    headers: {
      'Authorization': 'whatever-you-want'
    },
    body: values
  }).then(response => response.json())
    .then(results => {
      console.log('ressssuuuullltsss ', results)
    })
}