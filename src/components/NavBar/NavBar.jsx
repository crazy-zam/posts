import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.nav_bar}>
      <NavLink className={styles.nav_link} to="./posts">
        Posts
      </NavLink>
      <NavLink className={styles.nav_link} to="./about">
        About
      </NavLink>
      <NavLink className={styles.nav_link} to="./login">
        Login
      </NavLink>
    </div>
  );
};

export default NavBar;
