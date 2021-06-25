import LoginSingpass from "./LoginSingpass";
import styles from "./Login.module.css";
import Logo from "../Logo/Logo";
import icons from "../../Assets/Icons/icons.svg";
const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles["info__splash"]}>
        <div className={styles["info__icon"]}>💡</div>
        <div classNme={styles["info__title"]}>
          <h1 className={styles["info__welcome"]}>
            Welcome to{"  "}
            <span>
              <Logo className={styles.logo} />
            </span>
          </h1>
          <p className={styles["info__text"]}>
            Your one-stop portal to start, manage and grow your business
          </p>
        </div>
      </div>
      <div className={styles.singpass}>
        <LoginSingpass />
      </div>
    </div>
  );
};

export default Login;
