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

export function postPost(data) {
  // return fetch("http://example.com/api/endpoint/", {
  //         method: "post",
  //         headers: {
  //           'Authorization': 'whatever-you-want'
  //         },
  //         body: JSON.stringify(data)
  //       }
}