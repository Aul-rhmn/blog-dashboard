import React, { useState } from 'react';
import { Post } from '../types';

interface PreviewProps {
  posts: Post[];
}

const Preview: React.FC<PreviewProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const publishedPosts = posts.filter((post) => post.status === 'published');
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = publishedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(publishedPosts.length / postsPerPage);

  return (
    <div>
      {currentPosts.map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text">{post.content}</p>
            <p className="card-text">
              <small className="text-muted">Category: {post.category}</small>
            </p>
          </div>
        </div>
      ))}

      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
            >
              <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Preview;