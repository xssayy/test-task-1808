import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <NavLink to="/MainPage" className={buildLinkClass}>
          Catalogue
        </NavLink>
        <NavLink to="/FavPage" className={buildLinkClass}>
          Your Favourites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
