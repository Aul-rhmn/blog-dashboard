import React from 'react';
import PostList from '../components/PostList.tsx';
import { useLocalStorage } from '../hooks/useLocalStorage.tsx';
import { Post } from '../types';

const AllPosts: React.FC = () => {
  const [posts, setPosts] = useLocalStorage<Post[]>('posts', []);

  const handleTrash = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, status: 'trashed' } : post
      )
    );
  };

  return (
    <div>
      <h2>All Posts</h2>
      <PostList posts={posts} onTrash={handleTrash} />
    </div>
  );
};

export default AllPosts;