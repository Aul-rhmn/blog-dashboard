import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../types';

interface PostFormProps {
  posts: Post[];
  onSave: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ posts, onSave }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (id) {
      const post = posts.find((p) => p.id === parseInt(id));
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setCategory(post.category);
      }
    }
  }, [id, posts]);

  const handleSubmit = (status: 'published' | 'draft') => {
    const newPost: Post = {
      id: id ? parseInt(id) : Date.now(),
      title,
      content,
      category,
      status,
    };
    onSave(newPost);
    navigate('/');
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="content"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary me-2"
        onClick={() => handleSubmit('published')}
      >
        Publish
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => handleSubmit('draft')}
      >
        Save as Draft
      </button>
    </form>
  );
};

export default PostForm;