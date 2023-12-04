import axios from 'axios';
const server = 'http://localhost:8080/api/';
export default class PostService {
  static async getPosts(postPagination) {
    // const response = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts',
    //   {
    //     params: {
    //       _limit: postPagination.limit,
    //       _page: postPagination.page,
    //     },
    //   },
    // );

    const response = await axios.get(`${server}post`);
    return response;
  }

  static async getPostById(id) {
    console.log(`${server}post/${id}`);
    const response = await axios.get(`${server}post/${id}`);
    return response;
  }

  static async getComments(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    return response;
  }
}
