import { useEffect, useState } from "react";
import {
  Design,
  DesignData,
  JsonDesign,
  JsonDesignProperties,
  JsonElement,
  JsonSlide,
  JsonSlideOrElement,
  JsonSlideProperties,
} from "./types";
import Image from "./components/Image/Image";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import Layout from "./components/Layout/Layout";
import SVG from "./components/SVG/SVG";
import Shape from "./components/Shape/Shape";
import SlideLayout from "./components/Layout/SlideLayout";
import { componentsByType } from "./utils";

function App({ designProperties, elementBatches, additionalElementData }: DesignData) {  

  return (
    <div>
      {designProperties && (
        <Layout {...designProperties}>
          {elementBatches.map((batch) => {
            return (
              <SlideLayout
                key={batch.properties.bannersetElementId}
                {...batch.properties}
              >
                {batch.elements.map((el) => {
                  const Component = componentsByType.find(
                    (c) => c.type === el.layerType,
                  )?.component as React.FC | undefined;

                  if (!Component) {
                    return <div key={el.properties.id}>No such element!</div>;
                  }

                  const props = { ...el, additionalData: additionalElementData[el.properties.id] };
                  return <Component key={el.properties.id} {...props} />;
                })}
              </SlideLayout>
            );
          })}
        </Layout>
      )}
    </div>
  );
}

export default App;
