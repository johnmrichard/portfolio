import React, { FC } from "react";
import styles from "./index.module.scss";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { mailtoLink } from "../../text/copy.ts";

const Footer: FC = () => (
  <div className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.text}>
        <EmailOutlinedIcon />
        <div>
          <a href={mailtoLink}>johnmrichard35@gmail.com</a>
        </div>
      </div>
      <div className={styles.text}>
        <LinkedInIcon />
        <a
          href={"https://www.linkedin.com/in/hire-john-richard/"}
          target="_blank"
          rel="noreferrer"
        >
          www.linkedin.com
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
