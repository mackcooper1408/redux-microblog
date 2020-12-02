import React, { useState } from "react";
import "./CommentForm.css";

function CommentForm({ addComment }) {
  const [formData, setFormData] = useState("");

  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value);
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();
    addComment(formData);
    setFormData("");
  }
  
  return (
    <form className="CommentForm form-inline" onSubmit={handleSubmit}>
      <div className="form-group mx-1">
        <input className="form-control" name="comment" value={formData} onChange={handleChange}/>
      </div>
      <button className="btn btn-outline-secondary btn-sm" type="submit">add comment</button>
    </form>
  )
}

export default CommentForm;