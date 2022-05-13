import { FC } from "react";
import Metaballs from "react-metaballs-js";

export const AppT: FC = () => (
  <div style={{ height: "2400px" }}>
    <Metaballs
      numMetaballs={50}
      minRadius={3}
      maxRadius={11}
      speed={3.0}
      color="#ff4400"
      backgroundColor="#121212"
      useDevicePixelRatio
      //   interactive="window"
      style={{
        position: "sticky",
        top: "0",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: "1",
      }}
    />
    <div
      style={{
        top: "0",
        position: "absolute",
        margin: "100px",
        height: "100%",
        width: "100vw",
        zIndex: "2",
      }}
    >
      <div
        style={{
          color: "#ffffff",
          width: "100%",
          textAlign: "center",
          borderRadius: "32px",
          padding: "100px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          fontSize: "32px",
        }}
      >
        {"Hello World!"}
      </div>
    </div>
  </div>
);
