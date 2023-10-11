import React from "react";
import "../styles/paginationCss.css";

const Pagination = ({ pages, currentPage, onPageChange }) => {
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li 
        key={page} 
        onClick={() => onPageChange(page)} 
        className={`liB ${currentPage === page ?"onPage":""}`}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
