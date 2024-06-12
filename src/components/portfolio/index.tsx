import React, { FC } from "react";
import styles from "./index.module.scss";
import PogoRogueBanner from "../../assets/pogo-rogue-banner.png";
import FidoBanner from "../../assets/fido-banner.jpg";
import BlindsideBanner from "../../assets/blindside-banner.png";
import WormwoodBanner from "../../assets/wormwood-banner.png";
import OHGJBanner from "../../assets/ohgj-banner.png";
import Card from "../card/index.tsx";
import { Page } from "../../models/enums.ts";

interface Props {
  setPage: (page: Page) => void;
}

const Portfolio: FC<Props> = ({ setPage }) => (
  <div className={styles.portfolio}>
    <div className={styles.content}>
      <div className={styles.title}>Portfolio Projects</div>
      <div className={styles.cardList}>
        <Card
          title="pogo rogue"
          description="A 2D roguelike platformer made in GameMaker as my capstone project"
          image={PogoRogueBanner}
          onClick={() => setPage(Page.PogoRogue)}
        />
        <Card
          title="FIDO"
          description="A 3D horror game made in Unity where a dogsitter fights back against a demonic dog"
          image={FidoBanner}
          onClick={() => setPage(Page.Fido)}
        />
        <Card
          title="Blindside"
          description="A co-op puzzle platformer game where players must face the challenges of communication in order to progress"
          image={BlindsideBanner}
          onClick={() => setPage(Page.Blindside)}
        />
        <Card
          title="Wormwood"
          description="A game where you play as an alien worm who cultivates trees and consumes them to evolve and obtain new abilities"
          image={WormwoodBanner}
          onClick={() => setPage(Page.Wormwood)}
        />
        <Card
          title="OHGJ Entries"
          description="Entries for the One Hour Game Jam where developers make a simple game in one hour"
          image={OHGJBanner}
          onClick={() => setPage(Page.OhgjEntries)}
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
