import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Header from "../header/index.tsx";
import Home from "../home/index.tsx";
import Footer from "../footer/index.tsx";
import Portfolio from "../portfolio/index.tsx";
import Resume from "../resume/index.tsx";
import Error from "../error/index.tsx";
import PogoRogue from "../portfolio/pogoRogue/index.tsx";
import Fido from "../portfolio/fido/index.tsx";
import Blindside from "../portfolio/blindside/index.tsx";
import OhgjEntries from "../portfolio/ohgjEntries/index.tsx";
import Wormwood from "../portfolio/wormwood/index.tsx";
import { Page } from "../../models/enums.ts";

const App = () => {
  const [page, setPage] = useState<Page>(Page.Home);
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (topRef.current !== null) {
      topRef.current.scrollIntoView();
    }
  }, [page]);

  const renderPage = () => {
    if (page === Page.Home) return <Home />;
    if (page === Page.Resume) return <Resume setPage={setPage} />;
    if (page === Page.Portfolio) return <Portfolio setPage={setPage} />;
    if (page === Page.PogoRogue) return <PogoRogue />;
    if (page === Page.Blindside) return <Blindside />;
    if (page === Page.OhgjEntries) return <OhgjEntries />;
    if (page === Page.Fido) return <Fido />;
    if (page === Page.Wormwood) return <Wormwood />;
    if (page === Page.Error) return <Error setPage={setPage} />;
  };

  return (
    <div className={styles.app}>
      <div ref={topRef} />
      <Header setPage={setPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
