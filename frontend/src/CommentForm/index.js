import React, { useState } from "react";
import "./CommentForm.css";

/**
 * Comment Form
 *
 * adds user comments on a given post.
 * @param {function} addComment adds comment to a particular post
 */
function CommentForm({ addComment }) {
  const initialData = { text: "" };
  const [formData, setFormData] = useState(initialData);

  // controlled component
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((old) => ({ ...old, [name]: value }));
  }

  // calls addComment from props and resets form
  function handleSubmit(evt) {
    evt.preventDefault();
    addComment(formData);
    setFormData(initialData);
  }

  return (
    <form className="CommentForm form-inline" onSubmit={handleSubmit}>
      <div className="form-group mx-1">
        <input
          className="form-control"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-outline-secondary btn-sm" type="submit">
        add comment
      </button>
    </form>
  );
}

export default CommentForm;
