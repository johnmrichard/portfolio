import React, { FC } from "react";
import styles from "./index.module.scss";

const PogoRogue: FC = () => (
  <div className={styles.pogoRogue}>
    <div className={styles.content}>
      <div className={styles.title}>Pogo Rogue</div>
      <iframe
        src="https://www.youtube.com/embed/9OU6AM7cdRM?si=85uX6zbTw_pi3hAW"
        className={styles.videoTile}
        title="YouTube Pogo Rogue Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <iframe
        src="https://store.steampowered.com/widget/2870280"
        className={styles.steamTile}
        title="Pogo Rogue Steam Page"
        frameBorder="0"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
      />
      <div className={styles.longText}>
        <b>Game Overview</b>
        <span>
          Pogo Pogue is a thrilling 2D, roguelike platformer that puts players
          in the role of a robot navigating its way through challenging levels
          on a pogo stick. In this skill-based action-platformer, players bounce
          to the top, collecting powerful items, selecting unique weapons, and
          battling a variety of enemies. The game features a distinctive and
          challenging movement system that adds a unique twist to the platformer
          genre. Pogo Pogue promises an engaging and challenging experience for
          players who are up for the task.
        </span>
        <span>
          This game was made as my Capstone project in order to graduate from
          The University of Utah.
        </span>
        <b>My Contributions</b>
        <span>
          During development, I wore multiple hats as both a <b>producer</b> and
          a <b>programmer</b>. My primary responsibilities included leading the
          subteam focused on creating enemies and designing the boss fights. I
          played a crucial role in engineering the boss fights, ensuring they
          were both challenging and enjoyable for players. Additionally, I
          reviewed the code produced by my subteam to maintain a high standard
          of quality and consistency. Beyond my subteam, I enforced coding
          standards across the entire development team to promote best practices
          and maintain a cohesive codebase.
        </span>
        <b>Key Learnings</b>
        <div>
          <div>
            Working on Pogo Pogue was an enriching experience that allowed me to
            grow in several key areas:
          </div>
          <ul>
            <li>
              <strong>AI Programming</strong>: I deepened my understanding of
              artificial intelligence, specifically in creating dynamic and
              challenging enemy behaviors.
            </li>
            <li>
              <strong>Finite State Machines</strong>: I gained hands-on
              experience with finite state machines, which were integral in
              managing the complex behaviors of the game's enemies and bosses.
            </li>
            <li>
              <strong>Team Leadership</strong>: Leading a subteam honed my
              leadership skills, teaching me how to effectively manage a group
              of developers, provide constructive feedback, and keep the team
              motivated and focused.
            </li>
            <li>
              <strong>Gameplay Design</strong>: I learned the intricacies of
              designing engaging gameplay mechanics, balancing difficulty, and
              ensuring a rewarding player experience.
            </li>
          </ul>
        </div>
        <span>
          Pogo Pogue stands as a testament to the collaborative effort and
          dedication of our team, and I am proud of the role I played in
          bringing this exciting game to life.
        </span>
      </div>
    </div>
  </div>
);

export default PogoRogue;
