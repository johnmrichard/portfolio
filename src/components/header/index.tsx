import React, { FC } from "react";
import styles from "./index.module.scss";
import { mailtoLink } from "../../text/copy.ts";
import { Page } from "../../models/enums.ts";

interface Props {
  setPage: (page: Page) => void;
}

const Header: FC<Props> = ({ setPage }) => (
  <div className={styles.header}>
    <div className={styles.buttonGroup}>
      <div className={styles.pageLink} onClick={() => setPage(Page.Home)}>
        HOME
      </div>
    </div>
    <div className={styles.buttonGroup}>
      <div className={styles.pageLink} onClick={() => setPage(Page.Portfolio)}>
        PORTFOLIO
      </div>
      <div className={styles.pageLink} onClick={() => setPage(Page.Resume)}>
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
