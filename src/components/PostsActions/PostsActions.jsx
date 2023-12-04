import MyButton from '../../UI/MyButton';
import MyInput from '../../UI/MyInput';
import styles from './PostActions.module.css';

const PostsActions = () => {
  return (
    <div>
      <MyInput className={styles.input} type="text" />
      <MyInput className={styles.input} type="text" />
      <MyButton className={styles.button}>Add post</MyButton>
    </div>
  );
};

export default PostsActions;
