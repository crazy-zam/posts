import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import styles from './SinglePost.module.css';

const SinglePost = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const response = await PostService.getPostById(params.postId);
      setPost(response.data);
    };
    getPost();
    const getComments = async () => {
      const response = await PostService.getComments(params.postId);
      setComments(response.data);
    };
    getComments();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.post}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className={styles.comments}>
        {' '}
        {comments.map((com) => {
          return (
            <div className={styles.single_comment} key={com.id}>
              <h3>{com.name}</h3>
              <h3>{com.email}</h3>
              <p>{com.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePost;
