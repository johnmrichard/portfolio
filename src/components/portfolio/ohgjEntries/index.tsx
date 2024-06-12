import React, { FC } from "react";
import styles from "./index.module.scss";

const OhgjEntries: FC = () => (
  <div className={styles.ohgjEntries}>
    <div className={styles.content}>
      <div className={styles.title}>One Hour Game Jam Entries</div>
      <div className={styles.text}>
        <span>
          These are entries to the <b>One Hour Game Jam</b>, where develpers
          have one hour to make a game. They are simple games that helped me
          learn rapid prototyping and core loop design.
        </span>
      </div>
      <div className={styles.itchTiles}>
        <div className={styles.itchTile}>
          <iframe
            src="https://itch.io/embed/2689991?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
            title="Guppy Grub Itch Page"
            width="100%"
            height="165"
            frameBorder="0"
          >
            <a href="https://johnrichard.itch.io/guppy-grub">
              Guppy Grub by johnrichard
            </a>
          </iframe>
        </div>
        <div className={styles.itchTile}>
          <iframe
            src="https://itch.io/embed/1857222?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
            title="Greys of Giza Itch Page"
            width="100%"
            height="165"
            frameBorder="0"
          >
            <a href="https://johnrichard.itch.io/greys-of-giza">
              Greys of Giza by johnrichard
            </a>
          </iframe>
        </div>
        <div className={styles.itchTile}>
          <iframe
            src="https://itch.io/embed/1878055?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
            title="Incendiary Itch Page"
            width="100%"
            height="165"
            frameBorder="0"
          >
            <a href="https://johnrichard.itch.io/incendiary">
              Incendiary by johnrichard
            </a>
          </iframe>
        </div>
        <div className={styles.itchTile}>
          <iframe
            src="https://itch.io/embed/1967812?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
            title="Thingama Bob Itch Page"
            width="100%"
            height="165"
            frameBorder="0"
          >
            <a href="https://johnrichard.itch.io/thingama-bob">
              Thingama Bob by johnrichard
            </a>
          </iframe>
        </div>
        <div className={styles.itchTile}>
          <iframe
            src="https://itch.io/embed/1975901?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
            title="Histone Itch Page"
            width="100%"
            height="165"
            frameBorder="0"
          >
            <a href="https://johnrichard.itch.io/histone">
              Histone by johnrichard
            </a>
          </iframe>
        </div>
        <div className={styles.itchTile}>
          <iframe
            src="https://itch.io/embed/1967894?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
            title="Lacuna Itch Page"
            width="100%"
            height="165"
            frameBorder="0"
          >
            <a href="https://johnrichard.itch.io/lacuna">
              Lacuna by johnrichard
            </a>
          </iframe>
        </div>
        <div className={styles.itchTile}>
          <iframe
            src="https://itch.io/embed/1866830?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
            title="Crop 'Til you Drop Itch Page"
            width="100%"
            height="165"
            frameBorder="0"
          >
            <a href="https://johnrichard.itch.io/crop-til-you-drop">
              Crop 'Til you Drop by johnrichard
            </a>
          </iframe>
        </div>
        <div className={styles.itchTile}>
          <iframe
            src="https://itch.io/embed/1987433?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
            title="Slumbering Dragon Itch Page"
            width="100%"
            height="165"
            frameBorder="0"
          >
            <a href="https://johnrichard.itch.io/slumbering-dragon">
              Slumbering Dragon by johnrichard
            </a>
          </iframe>
        </div>
      </div>
    </div>
  </div>
);

export default OhgjEntries;
