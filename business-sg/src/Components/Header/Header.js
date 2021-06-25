import Logo from "../Logo/Logo";
import Button from "../UI/Button";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <Logo className={styles["header__logo"]} />
      <nav className={styles["nav"]}>
        <ul className={styles["nav__list"]}>
          <li>Dashboard</li>
          <li>About</li>
          <li>Help</li>
        </ul>
        <Button className={"login__button"}>Log in</Button>
      </nav>
    </div>
  );
};
export default Header;
