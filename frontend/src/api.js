import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:5000/api"

class microBlogApi {
  static async getAllPosts() {
    const result = await axios.get(`${BASE_URL}/posts`);
    
    return result.data;
  }

  static async getPost(postId) {
    const result = await axios.get(`${BASE_URL}/posts/${postId}`);
    
    return result.data;
  }
  
  static async getAllComments(postId){
    const result = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    console.log("All COMMENTS", result.data);
    return result.data;  
  }


}


export default microBlogApi;