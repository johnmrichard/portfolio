import React from "react";
import { ReactComponent as LogoSvg } from "./logo.svg";
import { ReactComponent as Portrait } from "./portrait.svg";

export type Image = JSX.Element;

export const Images = {
  LogoSvg: <LogoSvg />,
  Portrait: <Portrait />,
};
