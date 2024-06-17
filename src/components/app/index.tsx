import React from "react";
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
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const setPage = (newPage: Page) => {
    switch (newPage) {
      case Page.Home:
        window.location.href = "/";
        break;
      case Page.Portfolio:
        window.location.href = "/portfolio";
        break;
      case Page.Resume:
        window.location.href = "/resume";
        break;
      case Page.PogoRogue:
        window.location.href = "/portfolio/pogo-rogue";
        break;
      case Page.Blindside:
        window.location.href = "/portfolio/blindside";
        break;
      case Page.OhgjEntries:
        window.location.href = "/portfolio/ohgj-entries";
        break;
      case Page.Wormwood:
        window.location.href = "/portfolio/wormwood";
        break;
      case Page.Fido:
        window.location.href = "/portfolio/fido";
        break;
      default:
        window.location.href = "/404";
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio setPage={setPage} />,
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
          element: <Resume setPage={setPage} />,
        },
        {
          path: "/404",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <div className={styles.app}>
      <Header setPage={setPage} />
      {/* {renderPage()} */}
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
