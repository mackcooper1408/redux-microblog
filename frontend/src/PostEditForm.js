import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

function PostEditForm({ post }) {
  const DEFAULT_FORM = post || {
    title: "",
    description:"",
    body: ""
  };
  const [form, setForm] = useState(DEFAULT_FORM);
  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    alert("SAVED!");
    history.push(`/`);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleCancel(evt){
    history.push("/");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title"> Title</label>
          <input
            className="form-control"
            name="title"
            id="form_title"
            onChange={handleChange}
            value={form.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description"> Description</label>
          <input
            className="form-control"
            name="description"
            id="description"
            onChange={handleChange}
            value={form.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            className="form-control"
            name="body"
            id="form_body"
            onChange={handleChange}
            value={form.body}
          ></textarea>
        </div>
        <button className="btn btn-outline-success btn-lg mx-1" type="submit">Save</button>
        <button className="btn btn-outline-danger btn-lg mx-1" onClick={handleCancel}>Cancel</button>
      </form>
  )
}

export default PostEditForm;