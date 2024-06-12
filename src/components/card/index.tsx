import React, { FC } from "react";
import styles from "./index.module.scss";

interface Props {
  title: string;
  description: string;
  image: any;
  onClick: () => void;
}

const Card: FC<Props> = ({ title, description, image, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <img src={image} width="256" height="144" alt="Card" />
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>{description}</div>
  </div>
);

export default Card;
