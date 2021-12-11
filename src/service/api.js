import axios from 'axios'

// const postsUrl =
//   'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY'
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
// export const getPosts = async (userId) => {
//   if (!userId) {
//     return await axios.get(`${postsUrl}`)
//   } else if (userId) {
//     return await axios.get(`${postsUrl}?userId=${userId}`)
//   }
// }

export const getPosts = async () => {
  return await axios.get(`${postsUrl}`)
}

// https://jsonplaceholder.typicode.com/posts?userId=1
