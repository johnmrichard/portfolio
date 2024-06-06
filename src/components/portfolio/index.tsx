import React, { FC } from "react";
import styles from "./index.module.scss";
import PogoRogueBanner from "../../assets/pogo-rogue-banner.png";
import FidoBanner from "../../assets/fido-banner.jpg";
import BlindsideBanner from "../../assets/blindside-banner.png";
import WormwoodBanner from "../../assets/wormwood-banner.png";
import OHGJBanner from "../../assets/ohgj-banner.png";
import Card from "../card/index.tsx";

const Portfolio: FC = () => (
  <div className={styles.portfolio}>
    <div className={styles.content}>
      <div className={styles.title}>Portfolio Projects</div>
      <div className={styles.cardList}>
        <Card
          title="pogo rogue"
          description="A 2D roguelike platformer made in GameMaker as my capstone project"
          image={PogoRogueBanner}
          route="/portfolio/pogo-rogue"
        />
        <Card
          title="FIDO"
          description="A 3D horror game made in Unity where a dogsitter fights back against a demonic dog"
          image={FidoBanner}
          route="/portfolio/fido"
        />
        <Card
          title="Blindside"
          description="A co-op puzzle platformer game where players must face the challenges of communication in order to progress"
          image={BlindsideBanner}
          route="/portfolio/blindside"
        />
        <Card
          title="Wormwood"
          description="A game where you play as an alien worm who cultivates trees and consumes them to evolve and obtain new abilities"
          image={WormwoodBanner}
          route="/portfolio/wormwood"
        />
        <Card
          title="OHGJ Entries"
          description="Entries for the One Hour Game Jam where developers make a simple game in one hour"
          image={OHGJBanner}
          route="/portfolio/ohgj-entries"
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
