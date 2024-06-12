import React, { FC } from "react";
import styles from "./index.module.scss";
import UofULogo from "../../assets/uofu-logo.png";
import PogoRogue from "../../assets/pogo-rogue.jpg";
import Fido from "../../assets/fido.jpg";
import { Page } from "../../models/enums.ts";

interface Props {
  setPage: (page: Page) => void;
}

const Resume: FC<Props> = ({ setPage }) => {
  const skills = [
    { name: "GameMaker", rating: 9 },
    { name: "Javascript", rating: 9 },
    { name: "Git", rating: 9 },
    { name: "Unity", rating: 8 },
    { name: "Gameplay Design", rating: 8 },
    { name: "AI Programming", rating: 8 },
    { name: "Agile Development", rating: 8 },
    { name: "Web Development", rating: 8 },
    { name: "C#", rating: 7 },
    { name: "Java", rating: 7 },
    { name: "C++", rating: 6 },
    { name: "Unreal Engine", rating: 6 },
    { name: "Game Production", rating: 6 },
    { name: "Large Software Development", rating: 6 },
    { name: "Client-Server Networking", rating: 5 },
    { name: "Shader Programming", rating: 5 },
  ];

  return (
    <div className={styles.resume}>
      <div className={styles.content}>
        <div
          className={styles.button}
          onClick={() => window.open("John-Richard-Resume.pdf", "_blank")}
        >
          Download PDF
        </div>
        <div>
          <div className={styles.title}>EDUCATION</div>
          <div className={styles.text}>
            <span>
              I received a{" "}
              <b>BS in Computer Science with an Emphasis in Games</b> from the
              University of Utah in 2024. I finished with a <b>3.72 GPA</b> and
              was added to the <b>Dean's List</b> every semester for my
              outstanding academic conduct.
            </span>
            <img src={UofULogo} alt="U of U Logo" width="158.5" height="200" />
          </div>
        </div>
        <div>
          <div className={styles.title}>PUBLICATIONS</div>
          <div className={styles.list}>
            <div className={styles.text}>
              <span>
                <b>Pogo Rogue</b> is a 2D, Roguelike, Platformer where you
                control a toy robot on a pogo stick. Me and 23 other students
                founded Bounce Back Games LLC. and published this game as our
                Capstone project. Check out the game's{" "}
                <a
                  href="https://store.steampowered.com/app/2870280/Pogo_Rogue/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Steam Page
                </a>{" "}
                to learn more.
              </span>
              <img
                src={PogoRogue}
                alt="Pogo Rogue Screenshot"
                width="384"
                height="216"
              />
            </div>
            <div className={styles.text}>
              <span>
                <b>FIDO</b> is a 3D, Horror adventure game where, during a
                dogsitting job gone wrong, you need to translate ancient runes
                to combat a demonic canine entity. Check out the game's{" "}
                <a
                  href="https://store.steampowered.com/app/1946330/FIDO/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Steam Page
                </a>{" "}
                to learn more.
              </span>
              <img src={Fido} alt="Fido Screenshot" width="384" height="216" />
            </div>
          </div>
        </div>

        <div>
          <div className={styles.title}>EXPERIENCE</div>
          <div className={styles.list}>
            <div className={styles.text}>
              <span>
                As a <b>Software Engineer Intern</b> at <b>Domo, Inc</b>., I
                engineered and maintained a variety of highly customized web
                applications for many of our corporate clients. I participated
                in sprint planning meetings and drove iterative software
                development processes. This job gave me the opportunity to
                interact collaboratively with clients to deliver features and
                bug fixes by working on their large code bases.
              </span>
            </div>
            <div className={styles.text}>
              <span>
                As a <b>Process Assistant</b> at <b>Amazon</b>, I trained our
                Problem Solver teams in both the QA and Pick departments. I led
                stand-up meetings to deliver updates and encouragement to our
                associates. Our department measurably improved as a result of
                the feedback and training I delivered to help associates grow.
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.title}>SKILLS</div>
          <div className={styles.skills}>
            {skills.map((skill) => (
              <div className={styles.skill}>
                <div className={styles.label}>{skill.name}</div>
                <div className={styles.progress}>
                  <div className={styles.progressLeft} />
                  <div
                    className={
                      skill.rating >= 2
                        ? styles.progressFull
                        : styles.progressEmpty
                    }
                  />
                  <div
                    className={
                      skill.rating >= 3
                        ? styles.progressFull
                        : styles.progressEmpty
                    }
                  />
                  <div
                    className={
                      skill.rating >= 4
                        ? styles.progressFull
                        : styles.progressEmpty
                    }
                  />
                  <div
                    className={
                      skill.rating >= 5
                        ? styles.progressFull
                        : styles.progressEmpty
                    }
                  />
                  <div
                    className={
                      skill.rating >= 6
                        ? styles.progressFull
                        : styles.progressEmpty
                    }
                  />
                  <div
                    className={
                      skill.rating >= 7
                        ? styles.progressFull
                        : styles.progressEmpty
                    }
                  />
                  <div
                    className={
                      skill.rating >= 8
                        ? styles.progressFull
                        : styles.progressEmpty
                    }
                  />
                  <div
                    className={
                      skill.rating >= 9
                        ? styles.progressFull
                        : styles.progressEmpty
                    }
                  />
                  <div className={styles.progressRight} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.title}>SUMMARY</div>
          <div className={styles.text}>
            Creative and technically skilled Video Game Developer and Software
            Engineer with a passion for crafting immersive user experiences.
            Recent graduate from the University of Utah with a BS in Computer
            Science, with an Emphasis in Games. Proficient in a variety of
            technologies and disciplines, I combine innovative design with
            robust technical skills to create engaging and memorable gaming
            experiences.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
