import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";


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
  },
  [active, listLength]
  );
  
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