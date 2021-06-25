import styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <h1 className={props.className}>
      Business<span className={styles["logo__span"]}>SG</span>
    </h1>
  );
};

export default Logo;
