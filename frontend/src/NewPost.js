import React from "react";
import PostEditForm from "./PostEditForm";
// import { v4 as uuid } from 'uuid';

function NewPost() {

  return (
    <div className="NewPost col-8">
      <h2>New Post</h2>
      <PostEditForm />
    </div>
  )
}

export default NewPost;