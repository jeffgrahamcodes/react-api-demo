import React, { useState } from 'react';

import { createPost } from '../services/postService';

export default function PostForm({ posts, setPosts }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      addPost();
    }
    setTitle('');
    setBody('');
  };

  const addPost = () => {
    const post = {
      title,
      body,
    };
    createPost(post)
      .then((res) => {
        setPosts([...posts, res.data]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>TITLE: </div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <div>Content: </div>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
