import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const getPosts = () => api.get('/posts');
const deletePost = (postID) => api.delete(`/posts/${postID}`);
const createPost = (post) => api.post('/posts', post);
const updatePost = (postID, post) =>
  api.put(`/posts/${postID}`, post);

export { getPosts, deletePost, createPost, updatePost };
