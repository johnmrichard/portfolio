import React, { FC } from "react";
import styles from "./index.module.scss";
import { Page } from "../../models/enums.ts";

interface Props {
  setPage: (page: Page) => void;
}

const Error: FC<Props> = ({ setPage }) => (
  <div className={styles.error}>
    <div className={styles.content}>
      <div className={styles.title}>404</div>
      <div className={styles.text}>
        The Page you are looking for does not exist
      </div>
      <div className={styles.pageLink} onClick={() => setPage(Page.Home)}>
        <u>Take me home</u>
      </div>
    </div>
  </div>
);

export default Error;
