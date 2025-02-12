import React from 'react';
import Preview from '../components/Preview.tsx';
import { useLocalStorage } from '../hooks/useLocalStorage.tsx';
import { Post } from '../types';

const PreviewPage: React.FC = () => {
  const [posts] = useLocalStorage<Post[]>('posts', []);

  return (
    <div>
      <h2>Preview</h2>
      <Preview posts={posts} />
    </div>
  );
};

export default PreviewPage;