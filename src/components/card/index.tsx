import React, { FC } from "react";
import styles from "./index.module.scss";

interface Props {
  title: string;
  description: string;
  image: any;
  route: string;
}

const Card: FC<Props> = ({ title, description, image, route }) => (
  <div className={styles.card} onClick={() => (window.location.href = route)}>
    <img src={image} width="256" height="144" alt="Card" />
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>{description}</div>
  </div>
);

export default Card;
