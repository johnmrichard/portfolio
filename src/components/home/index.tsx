import React, { FC } from "react";
import styles from "./index.module.scss";
import headshot from "../../assets/headshot-circle.png";

const Home: FC = () => (
  <div className={styles.home}>
    <div className={styles.content}>
      <div className={styles.section}>
        <div className={styles.text}>
          <div>
            <div>Hello, my name is</div>
            <div className={styles.largeText}>John Richard.</div>
          </div>
          <div>
            I am a <b>Video Game Engineer</b> from Salt Lake City, Utah with a
            <b> BS in Computer Science</b>.
          </div>
        </div>
        <img className={styles.headshot} src={headshot} alt="Headshot" />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>LETS WORK TOGETHER</div>
        <div className={styles.text}>
          My dream is to create games that resonate with players and leave a
          lasting impact. I'm eager to bring my creativity and expertise to a
          dynamic team and contribute to the next great game. Let's make
          something amazing together!
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>ABOUT ME</div>
        <div className={styles.text} style={{ fontSize: "24px" }}>
          <span>
            Ever since I first slotted <i>Ocarina of Time</i> into my Nintendo
            64, I've been captivated by the magic of video game worlds.
          </span>
          <span>
            In 2017, I decided to turn that passion into a career. I moved to
            Salt Lake City to study game development at the University of Utah's
            world renowned program. I graduated with a BS in Computer Science
            with an Emphasis in Games, eager to create my own virtual
            adventures.
          </span>
          <span>
            Along the way, I discovered a secondary passion for Software
            Engineering. I've had the privilege of working at one of Utah's
            largest software companies, developing custom web applications to
            solve real-world problems.
          </span>
          <span>
            When I'm not crafting games or coding, you'll find me immersed in a
            good book, playing D&D, watching anime, or spending quality time
            with my wonderful wife and our two cats.
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
