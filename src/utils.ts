import Button from './components/Button/Button';
import Image from './components/Image/Image';
import SVG from './components/SVG/SVG';
import Shape from './components/Shape/Shape';
import Text from './components/Text/Text';
import fetch from 'node-fetch';
import { Design, DesignData, JsonDesignProperties, JsonSlide, JsonSvgProperties } from './types';

const imageElement = {
  type: 'image',
  component: Image,
};

const textElement = {
  type: 'text',
  component: Text,
};

const buttonElement = {
  type: 'button',
  component: Button,
};

const svgElement = {
  type: 'svg',
  component: SVG,
};

const shapeElement = {
  type: 'shape',
  component: Shape,
};

export const componentsByType = [imageElement, textElement, buttonElement, svgElement, shapeElement];

export class ServerError extends Error {
  constructor(
    // eslint-disable-next-line
    public readonly status?: number,
    message?: string,
  ) {
    super(message);
  }
}

// const hash = j2308jq, y6lpqnm, j23y65x
export const getData = async (hash: string) => {
  const response = await fetch(`https://creatopy-cdn-b1a8267.s3.amazonaws.com/designs/${hash}/json`);

  if (response.status >= 400 && response.status < 500) {
    throw new ServerError(400, 'The hash is not found!');
  }
  if (response.status >= 500) {
    throw new ServerError(500, 'Oops, something went wrong.. Try with another hash!');
  }

  const design = (await response.json()) as Design;

  const designProperties = design.banner.properties as JsonDesignProperties;
  const elementBatches = design.banner.elements as JsonSlide[];

  const svgElementPromises = elementBatches
    .flatMap((el) => el.elements)
    .filter((el) => el.layerType === 'svg')
    .map(async (el) => {
      const res = await fetch(
        `https://d2gla4g2ia06u2.cloudfront.net/assets/media/${(el.properties as JsonSvgProperties).url}`,
      );

      if (res.status >= 400) {
        throw new ServerError(400, `Unable to fetch the additional data for SVG with ID ${el.properties.id}!`);
      }

      const data = await res.text();
      const SVG64 = btoa(data);
      const image64 = 'data:image/svg+xml;base64,' + SVG64;
      return { id: el.properties.id, data: image64 };
    });

  const svgElementResults = await Promise.all(svgElementPromises);
  const additionalElementsData = svgElementResults.reduce((acc, res) => ({ ...acc, [res.id]: res.data }), {});

  return {
    designProperties,
    elementBatches,
    additionalElementsData,
  } as DesignData;
};
