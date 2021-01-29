import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addPostWithApi,
  updatePostWithApi,
} from "../../actions/actionCreators";
import { v4 as uuid } from "uuid";

/**
 * Post Edit Form
 *
 * form for updating a current post
 * - allows for changing categories
 * @param {Object} post post details to be auto filled into the form on load
 * @param {String} postId specific id of the post
 */
function PostEditForm({ post, postId }) {
  const DEFAULT_FORM = post || {
    title: "",
    description: "",
    body: "",
    category: "",
  };
  const [form, setForm] = useState(DEFAULT_FORM);

  // get existing categories add to state for form
  const categories = useSelector((store) => store.posts.categories);

  const history = useHistory();

  const dispatch = useDispatch();
  /** dispatch form data to redux & api.
   * use postId if editing existing post, otherwise use uuid()
   */
  function handleSubmit(evt) {
    evt.preventDefault();

    if (postId) {
      dispatch(updatePostWithApi(postId, form));
    } else {
      const id = uuid();
      dispatch(addPostWithApi(id, form));
    }
    history.push("/");
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleCancel(evt) {
    evt.preventDefault();
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
          required
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
          required
        ></textarea>
      </div>
      <label>Categories</label>
      <div className="row d-flex justify-content-center">
        <div className="form-group col-8">
          <select
            className="form-control"
            name="category"
            id="category"
            value={form.category || ""}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            {categories.map((cat, i) => (
              <option value={cat} key={i} name="category">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="btn btn-outline-success btn-lg mx-1" type="submit">
        Save
      </button>
      <button
        className="btn btn-outline-danger btn-lg mx-1"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </form>
  );
}

export default PostEditForm;
