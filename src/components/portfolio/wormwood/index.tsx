import React, { FC } from "react";
import styles from "./index.module.scss";

const Wormwood: FC = () => (
  <div className={styles.wormwood}>
    <div className={styles.content}>
      <div className={styles.title}>WormWood</div>
      <iframe
        src="https://itch.io/embed/1849953?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
        title="Wormwood Itch Page"
        className={styles.itchTile}
        width="100%"
        height="165"
        frameBorder="0"
      >
        <a href="https://johnrichard.itch.io/wormwood">
          WormWood by johnrichard
        </a>
      </iframe>
      <div className={styles.longText}>
        <b>Game Overview</b>
        <span>
          WormWood is a captivating 2D game developed in GameMaker, where
          players assume the role of a worm on a distant planet. The core
          gameplay involves planting trees, hibernating while they grow, and
          consuming the resulting fruit and wood to evolve. As the worm eats
          bio-matter, it gains new abilities and upgrades, allowing it to plant
          taller trees and explore new heights. WormWood combines elements of
          farming and exploration, providing a relaxing experience as players
          strive to see how high they can grow.
        </span>
        <span>
          This game was made in one week as a solo submission for the{" "}
          <a
            href={"https://itch.io/jam/zeno-jam-6"}
            target="_blank"
            rel="noreferrer"
          >
            ZenoJam 6
          </a>{" "}
          game jam.
        </span>
        <b>Key Learnings</b>
        <div>
          <div>
            Developing WormWood during the ZenoJam game jam provided me with
            valuable insights and experiences:
          </div>
          <ul>
            <li>
              <strong>Game Crunch</strong>: From the game jam's kickoff to the
              deadline, I spent every waking moment focused on developing
              WormWood (no joke). This was neither sustainable nor healthy, but
              it gave me an valuable glimpse into crunch and its effect on
              developers.
            </li>
            <li>
              <strong>UI Design</strong>: I gained experience in designing user
              interfaces that are both functional and aesthetically pleasing,
              enhancing the player's interaction with the game.
            </li>
            <li>
              <strong>Solo Development</strong>: I experienced the challenges
              and rewards of solo development, from initial concept to final
              implementation, gaining a deeper appreciation for the multifaceted
              nature of game creation.
            </li>
          </ul>
        </div>
        <span>
          WormWood stands as a testament to the creativity and dedication
          required to develop a game within a limited timeframe. I am proud of
          what I achieved in just one week and the opportunity to showcase my
          skills in game design and development.
        </span>
      </div>
    </div>
  </div>
);

export default Wormwood;
