import React, { useState } from "react";
import "./CommentForm.css";

function CommentForm({ addComment }) {
  const initialData = { text: "" };
  const [formData, setFormData] = useState(initialData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(old => ({...old, [name]: value}));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addComment(formData);
    setFormData(initialData);
  }

  return (
    <form className="CommentForm form-inline" onSubmit={handleSubmit}>
      <div className="form-group mx-1">
        <input className="form-control" name="text" value={formData.text} onChange={handleChange} />
      </div>
      <button className="btn btn-outline-secondary btn-sm" type="submit">add comment</button>
    </form>
  )
}

export default CommentForm;