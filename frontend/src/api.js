import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:5000/api";

class microBlogApi {
  static async getAllPosts() {
    const result = await axios.get(`${BASE_URL}/posts`);
    console.debug(`API GET ${BASE_URL}/posts`);

    return result.data;
  }

  static async getPost(postId) {
    const result = await axios.get(`${BASE_URL}/posts/${postId}`);
    console.debug(`API GET ${BASE_URL}/posts/${postId}`);

    return result.data;
  }

  static async addPost(postDetails) {
    const result = await axios.post(`${BASE_URL}/posts`, postDetails);
    console.debug(`API POST ${BASE_URL}/posts`);

    return result.data;
  }
  static async updatePost(postId, postDetails) {
    const result = await axios.put(`${BASE_URL}/posts/${postId}`, postDetails);
    console.debug(`API PUT ${BASE_URL}/posts/${postId}`);

    return result.data;
  }
  static async deletePost(postId) {
    const result = await axios.delete(`${BASE_URL}/posts/${postId}`);
    console.debug(`API DELETE ${BASE_URL}/posts/${postId}`);

    return result.data;
  }

  static async getAllComments(postId) {
    const result = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    console.debug(`API GET ${BASE_URL}/posts/${postId}/comments`);

    return result.data;
  }

  static async addNewComments(postId, commentDetails) {
    const result = await axios.post(`${BASE_URL}/posts/${postId}/comments`, commentDetails);
    console.debug(`API POST ${BASE_URL}/posts/${postId}/comments`);

    return result.data;
  }

  static async deleteComment(postId, commentId) {
    const result = await axios.delete(`${BASE_URL}/posts/${postId}/comments/${commentId}`);
    console.debug(`API DELETE ${BASE_URL}/posts/${postId}/comments/${commentId}`);

    return result.data;
  }

  static async updateVote(postId, vote){
    const result = await axios.post(`${BASE_URL}/posts/${postId}/vote/${vote}`);
    console.debug(`API POST ${BASE_URL}/posts/${postId}/votes/${vote}`);

    return result.data;
  }

}


export default microBlogApi;