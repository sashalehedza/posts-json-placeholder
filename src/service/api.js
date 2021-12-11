import axios from 'axios'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getPosts = async () => {
  return await axios.get(`${postsUrl}`)
}
