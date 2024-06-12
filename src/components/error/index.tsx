import React, { FC } from "react";
import styles from "./index.module.scss";
import { Page } from "../../models/enums";

interface Props {
  setPage: (page: Page) => void;
}

const Error: FC<Props> = ({ setPage }) => (
  <div className={styles.error}>Hello, Error!</div>
);

export default Error;
