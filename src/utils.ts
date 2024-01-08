import Button from "./components/Button/Button";
import Image from "./components/Image/Image";
import SVG from "./components/SVG/SVG";
import Shape from "./components/Shape/Shape";
import Text from "./components/Text/Text";
import { ComponentByType, JsonLayerType } from "./types";

const imageElement = {
  type: "image",
  component: Image,
};

const textElement = {
  type: "text",
  component: Text,
};

const buttonElement = {
  type: "button",
  component: Button,
};

const svgElement = {
  type: "svg",
  component: SVG,
};

const shapeElement = {
  type: "shape",
  component: Shape,
};

export const componentsByType = [
  imageElement,
  textElement,
  buttonElement,
  svgElement,
  shapeElement,
];
