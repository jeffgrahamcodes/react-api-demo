import React, { useState, useEffect } from 'react';

import { getPosts } from '../services/postService';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>POSTS</h1>
    </div>
  );
}
