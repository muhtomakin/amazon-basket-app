import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { DOTS } from "../hooks/usePagination";
import { nanoid } from "nanoid";

const Pagination = (props) => {
  const { 
    currentPaginationData,
  } = props;

  return (
    <ul
      className="wrapper"
      aria-label="Blog post pagination list"
    >
      {currentPaginationData.currentPage !== 1 &&
        <li className="paginationItem">
          <button
            type="button"
            className="arrowButton left"
            aria-label="Goto previous page"
            onClick={currentPaginationData.prev}
          >
            Back
          </button>
        </li>
      }

      {currentPaginationData.paginationRange.map((pageNumber) => {
        const key = nanoid();

        if (pageNumber === DOTS) {
          return (
            <li key={key} className="dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={key}
            className="paginationItem"
            aria-current={currentPaginationData.currentPage === pageNumber && "page"}
          >
            <button
              type="button"
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => currentPaginationData.jump(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      {currentPaginationData.currentPage !== currentPaginationData.maxPage &&
        <li className="paginationItem">
          <button
            type="button"
            className="arrowButton right"
            aria-label="Goto next page"
            onClick={currentPaginationData.next}
          >
            Forward
          </button>
        </li>
      }
    </ul>
  )
}

export default Pagination
