import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

/**
 * Post List Pagination
 *
 * - Displays pages at bottom of page for pagination of posts.
 * - Handles slicing posts with given list length and items per page.
 * @param {Number} listLength length of current post list
 * @param {Function} slicePosts slices current post list
 * @param {Number} itemsPerPage items to be shown per page.
 *    - used to determine slice size
 */
function PostListPagination({ listLength, slicePosts, itemsPerPage }) {
  const [active, setActive] = useState(1);
  const [pages, setpages] = useState([]);

  useEffect(() => {
    const newPages = [];
    for (let number = 0; number < listLength / itemsPerPage; number++) {
      newPages.push(
        <Pagination.Item
          key={number + 1}
          active={number + 1 === active}
          value={number + 1}
          onClick={() => handleClick(number + 1)}
        >
          {number + 1}
        </Pagination.Item>
      );
    }
    setpages(newPages);
    const start = (active - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    slicePosts(start, end);
  }, [active, listLength, itemsPerPage, slicePosts]);

  function handleClick(value) {
    setActive(value);
  }

  return (
    <div>
      <Pagination className="d-inline-flex" size="sm">
        {pages}
      </Pagination>
    </div>
  );
}

export default PostListPagination;
