import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";

/**
 * Class for making API calls to backend
 */
class microBlogApi {
  // GET get minimal details on all posts
  static async getAllPosts() {
    const result = await axios.get(`${BASE_URL}/posts`);
    console.debug(`API GET ${BASE_URL}/posts`);

    return result.data;
  }

  // GET get full details on a single post
  static async getPost(postId) {
    const result = await axios.get(`${BASE_URL}/posts/${postId}`);
    console.debug(`API GET ${BASE_URL}/posts/${postId}`);

    return result.data;
  }

  // POST add new post to db
  static async addPost(postDetails) {
    const result = await axios.post(`${BASE_URL}/posts`, postDetails);
    console.debug(`API POST ${BASE_URL}/posts`);

    return result.data;
  }

  // PUT updates a single post in db
  static async updatePost(postId, postDetails) {
    const result = await axios.put(`${BASE_URL}/posts/${postId}`, postDetails);
    console.debug(`API PUT ${BASE_URL}/posts/${postId}`);

    return result.data;
  }

  // DELETE deletes a single post
  static async deletePost(postId) {
    const result = await axios.delete(`${BASE_URL}/posts/${postId}`);
    console.debug(`API DELETE ${BASE_URL}/posts/${postId}`);

    return result.data;
  }

  // GET gets all comments for a single post
  static async getAllComments(postId) {
    const result = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    console.debug(`API GET ${BASE_URL}/posts/${postId}/comments`);

    return result.data;
  }

  // POST adds new comments to a single post
  static async addNewComments(postId, commentDetails) {
    const result = await axios.post(
      `${BASE_URL}/posts/${postId}/comments`,
      commentDetails
    );
    console.debug(`API POST ${BASE_URL}/posts/${postId}/comments`);

    return result.data;
  }

  // DELETE deletes a single comment from a single post
  static async deleteComment(postId, commentId) {
    const result = await axios.delete(
      `${BASE_URL}/posts/${postId}/comments/${commentId}`
    );
    console.debug(
      `API DELETE ${BASE_URL}/posts/${postId}/comments/${commentId}`
    );

    return result.data;
  }

  // POST updates vote count up or down
  static async updateVote(postId, vote) {
    const result = await axios.post(`${BASE_URL}/posts/${postId}/vote/${vote}`);
    console.debug(`API POST ${BASE_URL}/posts/${postId}/votes/${vote}`);

    return result.data;
  }
}

export default microBlogApi;
