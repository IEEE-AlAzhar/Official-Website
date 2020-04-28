import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) => {
  const { blogsCount, pageSize, currentPage, onPaginationClick } = props;
  const pagesCount = Math.ceil(blogsCount / pageSize);
  if (pagesCount === 1) return null;
  const numbers = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <Link
            className="page-link"
            onClick={() => onPaginationClick(-1)}
            to="#"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </li>
        {numbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
          >
            <Link
              className="page-link"
              onClick={() => onPaginationClick(number)}
              to="#"
            >
              {number}
            </Link>
          </li>
        ))}
        <li
          className={
            currentPage === pagesCount ? "page-item disabled" : "page-item"
          }
        >
          <Link
            className="page-link"
            to="#"
            onClick={() => onPaginationClick()}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
