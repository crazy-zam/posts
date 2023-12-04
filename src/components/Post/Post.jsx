import { useNavigate } from 'react-router-dom';
import MyButton from '../../UI/MyButton';
import styles from './Post.module.css';

const Post = ({ post, deletePost }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.post}>
      <div className={styles.text}>
        <h2 className={styles.title}>{post.title}</h2>
        {/* <h4>{post.id}</h4> */}
        <p className={styles.body}>{post.body}</p>
      </div>
      <div className={styles.buttons}>
        <MyButton
          className={styles.open}
          onClick={() => navigate(`${post.id}`)}
        >
          Open
        </MyButton>
        <MyButton className={styles.delete} onClick={() => deletePost(post.id)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default Post;
