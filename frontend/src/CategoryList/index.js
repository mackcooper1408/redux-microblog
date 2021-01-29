import React from "react";
import { useParams } from "react-router-dom";
import PostList from "../PostList";

function CategoryList() {
  
  const { category } = useParams();

  return (
    <div className="mt-2">
      <h2>{category.toUpperCase()} POSTS</h2>
      <PostList />
    </div>
  )
}

export default CategoryList;