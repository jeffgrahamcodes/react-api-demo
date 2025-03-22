import React, { useState, useEffect } from 'react';

import { createPost, updatePost } from '../services/postService';

export default function PostForm({
  posts,
  setPosts,
  editingPost,
  setEditingPost,
}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingPost) {
      if (title && body) {
        editPost();
      }
    } else {
      if (title && body) {
        addPost();
      }
    }

    setTitle('');
    setBody('');
    setEditingPost(null);
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

  const editPost = () => {
    const post = {
      title,
      body,
    };
    updatePost(editingPost.id, post)
      .then((res) => {
        setPosts(
          posts.map((post) =>
            post.id === editingPost.id ? res.data : post
          )
        );
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
          <button type="submit">
            {editingPost ? 'Edit Post' : 'Add Post'}
          </button>
        </div>
      </form>
    </div>
  );
}
