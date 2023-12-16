import React from "react";
import "../index.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaBackward, FaForward } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="btn-container">
      <FaBackward onClick={() => onPageChange(1)} className="action-btn" />
      <IoIosArrowBack
        className="action-btn"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      />
      <ul>
        {[...Array(totalPages).keys()].map((page) => (
          <li
            className={currentPage === page + 1 ? "num-btn active" : "num-btn"}
            key={page + 1}
            onClick={() => onPageChange(page + 1)}
          >
            {page + 1}
          </li>
        ))}
      </ul>
      <IoIosArrowForward
        className="action-btn"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
      />
      <FaForward
        className="action-btn"
        onClick={() => onPageChange(totalPages)}
      />
    </div>
  );
};

export default Pagination;
