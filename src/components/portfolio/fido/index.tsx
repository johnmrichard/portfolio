import React, { FC } from "react";
import styles from "./index.module.scss";

const Fido: FC = () => (
  <div className={styles.fido}>
    <div className={styles.content}>
      <div className={styles.title}>FIDO</div>
      <iframe
        src="https://www.youtube.com/embed/9SxZdXFNTGE?si=AmpXDZwpnUkXuV-H"
        className={styles.videoTile}
        title="YouTube FIDO Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <iframe
        src="https://store.steampowered.com/widget/1946330"
        className={styles.steamTile}
        title="FIDO Steam Page"
        frameBorder="0"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
      />
      <div className={styles.longText}>
        <b>Game Overview</b>
        <span>
          FIDO is a suspenseful top-down, 3D horror game created in Unity.
          Players take on the role of a dog-sitter who quickly realizes that the
          dog they are looking after is a demonic entity. As the game
          progresses, players must evade the demonic dog and discover an ancient
          text that provides the means to combat it by translating demonic
          runes. This unique blend of horror and puzzle-solving creates a tense
          and engaging experience that keeps players on the edge of their seats.
        </span>
        <span>
          This game was made for a class called Traditional Game Development.
        </span>
        <b>My Contributions</b>
        <span>
          I contributed to the project as both a designer and programmer. I
          helped design the unique translation combat system where players must
          hit the corresponding key to damage the demon dog, adding a layer of
          strategy and skill to the gameplay. I also programmed the player
          movement mechanics, including an interactive lighting feature where
          players can direct their flashlight using the mouse, adding to the
          atmospheric tension of the game. Additionally, I helped implement a
          task system where players must complete various objectives, providing
          structure and progression to the gameplay.
        </span>
        <b>Key Learnings</b>
        <div>
          <div>
            FIDO is admittedly somewhat buggy. However, working on this game was
            a deeply educational experience that certainly expanded my skills in
            several areas:
          </div>
          <ul>
            <li>
              <strong>Collisions and Physics</strong>: I gained a thorough
              understanding of collision detection and response, crucial for
              creating realistic and engaging interactions within the game
              environment.
            </li>
            <li>
              <strong>Environment Design</strong>: I learned the principles of
              designing immersive and atmospheric environments that contribute
              to the overall horror experience using environmental storytelling.
            </li>
            <li>
              <strong>Unity's C# Scripts</strong>: I developed proficiency in
              Unity's C# scripting, enabling me to implement complex game
              mechanics and interactive features effectively.
            </li>
          </ul>
        </div>
        <span>
          FIDO was a great learning opportunity that showed me both the benefits
          and pitfalls of collaborative development. I am proud of my
          contributions to this project and the opportunity to publish a
          complete experience.
        </span>
      </div>
    </div>
  </div>
);

export default Fido;
