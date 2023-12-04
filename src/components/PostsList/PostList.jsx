import Post from '../Post/Post';
import styles from './PostList.module.css';
const PostList = ({ posts, deletePost }) => {
  return (
    <div className={styles.postlist}>
      {posts.map((post) => (
        <Post deletePost={deletePost} key={post.id} id={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
