import { useEffect, useState } from 'react';
import PagesBar from '../components/PagesBar/PagesBar';
import PostsActions from '../components/PostsActions/PostsActions';
import PostList from '../components/PostsList/PostList';
import PostService from '../API/PostService';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [postPagination, setPostPagination] = useState({ limit: 10, page: 1 });
  const [pages, setPages] = useState([]);

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  useEffect(() => {
    const getPosts = async () => {
      const response = await PostService.getPosts(postPagination);
      setPosts(response.data);
      setTotalPostsCount(response.headers[`x-total-count`]);
    };
    getPosts();
  }, [pages, postPagination]);

  useEffect(() => {
    const totalPages = Math.ceil(totalPostsCount / postPagination.limit);
    const temp = [];
    for (let i = 0; i < totalPages; i++) {
      temp.push(i + 1);
    }
    setPages(temp);
  }, [totalPostsCount, postPagination]);
  return (
    <>
      <PostsActions />
      <PostList posts={posts} deletePost={deletePost} />
      <PagesBar
        pages={pages}
        setPostPagination={setPostPagination}
        postPagination={postPagination}
      />
    </>
  );
};

export default Posts;
