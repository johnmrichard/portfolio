import React, { FC } from "react";
import styles from "./index.module.scss";
import { Page } from "../../../models/enums";

const Blindside: FC = () => (
  <div className={styles.blindside}>
    <div className={styles.content}>
      <div className={styles.title}>Blindside</div>
      <iframe
        src="https://www.youtube.com/embed/Q6QDNTmi5Lc?si=UszeK6Nmm4okMXWI"
        className={styles.videoTile}
        title="YouTube Blindside Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <iframe
        src="https://itch.io/embed/1845789?bg_color=ebe9e1&amp;fg_color=d6536d&amp;link_color=e43d12&amp;border_width=2&amp;border_color=fa5c5c"
        title="Blindside Itch Page"
        className={styles.itchTile}
        width="100%"
        height="165"
        frameBorder="0"
      >
        <a href="https://waffleworks.itch.io/blindside">
          Blindside by WaffleWorks
        </a>
      </iframe>
      <div className={styles.longText}>
        <b>Game Overview</b>
        <span>
          Blindside is an innovative offline 2-player co-op platformer that
          challenges players to explore and navigate partially visible levels.
          Each player uses a separate device and can only see one-half of the
          level, while the other half is visible to their partner. This unique
          design requires players to communicate verbally to guide each other
          through the challenges and obstacles presented in the game. Blindside
          emphasizes the importance of teamwork and communication, creating a
          truly collaborative and engaging gameplay experience.
        </span>
        <span>
          This game was made for a class called Alternative Game Development.
        </span>
        <b>My Contributions</b>
        <span>
          In the development of Blindside, I contributed in multiple areas
          including art, programming, and design. I was responsible for creating
          and animating many of the visual elements of the game such as
          backgrounds, cutscenes, tilesets, and interractables. I helped ensure
          a cohesive and appealing aesthetic. I also helped to implement various
          game mechanics and functionality, focusing on the seamless integration
          of the unique gameplay mechanics. Additionally, I played a key role in
          the overall game design, including level design and puzzle creation,
          to ensure an engaging and challenging experience for players.
        </span>
        <b>Key Learnings</b>
        <div>
          <div>
            Working on Blindside provided me with valuable experience and
            knowledge in several areas:
          </div>
          <ul>
            <li>
              <strong>Level Design</strong>: I learned how to create intricate
              and challenging levels that require strategic thinking and
              collaboration.
            </li>
            <li>
              <strong>Animation</strong>: I developed skills in creating smooth
              and visually appealing animations that enhance the gameplay
              experience.
            </li>
            <li>
              <strong>Storyboarding</strong>: I gained experience in planning
              and visualizing the game's narrative and flow, ensuring a coherent
              and engaging player journey.
            </li>
            <li>
              <strong>Puzzle Design</strong>: I learned the intricacies of
              designing puzzles that are both challenging and rewarding,
              requiring effective communication and teamwork between players.
            </li>
          </ul>
        </div>
        <span>
          Blindside stands as a testament to the collaborative effort and
          creativity of our team, and I am proud of the role I played in
          bringing this unique and engaging game to life.
        </span>
      </div>
    </div>
  </div>
);

export default Blindside;
