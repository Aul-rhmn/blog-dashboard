import React from 'react';
import PostForm from '../components/PostForm.tsx';
import { useLocalStorage } from '../hooks/useLocalStorage.tsx';
import { Post } from '../types';

const AddNew: React.FC = () => {
  const [posts, setPosts] = useLocalStorage<Post[]>('posts', []);

  const handleSave = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <PostForm posts={posts} onSave={handleSave} />
    </div>
  );
};

export default AddNew;