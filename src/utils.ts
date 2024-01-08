import Button from "./components/Button/Button";
import Image from "./components/Image/Image";
import SVG from "./components/SVG/SVG";
import Shape from "./components/Shape/Shape";
import Text from "./components/Text/Text";
import fetch from "node-fetch";
import { ComponentByType, DesignData, JsonDesignProperties, JsonLayerType, JsonSlide, JsonSvg, JsonSvgProperties } from "./types";

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


// const hash = "j23y65x"; // j2308jq, y6lpqnm, j23y65x
export const getData = async (hash: string) => {
  const response = await fetch(`https://creatopy-cdn-b1a8267.s3.amazonaws.com/designs/${hash}/json`)
  const design = await response.json() as any;

  const designProperties = design.banner.properties as JsonDesignProperties;
  const elementBatches = design.banner.elements as JsonSlide[];

  const svgElementPromises = elementBatches
    .flatMap(el => el.elements)
    .filter(el => el.layerType === 'svg')
    .map(async (el) => {
      const res = await fetch(`https://d2gla4g2ia06u2.cloudfront.net/assets/media/${(el.properties as JsonSvgProperties).url}`);
      const data = await res.text();
      const SVG64 = btoa(data);
      const image64 = "data:image/svg+xml;base64," + SVG64;
      return { id: el.properties.id, data: image64 };
    })

    
  const svgElementResults = await Promise.all(svgElementPromises);
  const additionalElementData = svgElementResults.reduce((acc, res) => ({ ...acc, [res.id]: res.data }), {});  

  return {
    designProperties,
    elementBatches,
    additionalElementData
  } as DesignData
}