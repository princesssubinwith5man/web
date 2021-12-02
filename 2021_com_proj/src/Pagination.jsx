import React from 'react';
import './App.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination'>
      <ul>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            {/*링크 추가=> 페이징하면 새로고침되더라구여*/}
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;