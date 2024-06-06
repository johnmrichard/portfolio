import React from "react";
import styles from "./index.module.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/portfolio/pogo-rogue",
      element: <PogoRogue />,
    },
    {
      path: "/portfolio/fido",
      element: <Fido />,
    },
    {
      path: "/portfolio/blindside",
      element: <Blindside />,
    },
    {
      path: "/portfolio/ohgj-entries",
      element: <OhgjEntries />,
    },
    {
      path: "/portfolio/wormwood",
      element: <Wormwood />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
  ]);

  return (
    <div className={styles.app}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
