import React, { FC } from "react";
import styles from "./index.module.scss";
import { mailtoLink } from "../../text/copy.ts";

const Header: FC = () => (
  <div className={styles.header}>
    <div className={styles.buttonGroup}>
      <div
        className={styles.pageLink}
        onClick={() => (window.location.href = "/")}
      >
        HOME
      </div>
    </div>
    <div className={styles.buttonGroup}>
      <div
        className={styles.pageLink}
        onClick={() => (window.location.href = "/portfolio")}
      >
        PORTFOLIO
      </div>
      <div
        className={styles.pageLink}
        onClick={() => (window.location.href = "/resume")}
      >
        RESUME
      </div>
      <div
        className={styles.button}
        onClick={() => (window.location.href = mailtoLink)}
      >
        CONTACT
      </div>
    </div>
  </div>
);

export default Header;
