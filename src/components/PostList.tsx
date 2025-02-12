import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface PostListProps {
  posts: Post[];
  onTrash: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onTrash }) => {
  const [activeTab, setActiveTab] = useState<'published' | 'drafts' | 'trashed'>('published');

  const filteredPosts = posts.filter((post) => {
    if (activeTab === 'published') return post.status === 'published';
    if (activeTab === 'drafts') return post.status === 'draft';
    if (activeTab === 'trashed') return post.status === 'trashed';
    return false;
  });

  return (
    <div>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'published' ? 'active' : ''}`}
            onClick={() => setActiveTab('published')}
          >
            Published
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'drafts' ? 'active' : ''}`}
            onClick={() => setActiveTab('drafts')}
          >
            Drafts
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'trashed' ? 'active' : ''}`}
            onClick={() => setActiveTab('trashed')}
          >
            Trashed
          </button>
        </li>
      </ul>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>
                <Link to={`/edit/${post.id}`} className="btn btn-sm btn-primary me-2">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onTrash(post.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;