import axios from 'axios'

const url = "http://localhost:5000/post"

export const fetchPosts = async() => await axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)