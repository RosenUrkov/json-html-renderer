import { useEffect, useState } from "react";
import {
  Design,
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

function App() {
  const [designProperties, setDesignProperties] =
    useState<JsonDesignProperties>();
  const [elementBatches, setElementBatches] = useState<JsonSlide[]>([]);

  const hash = "j23y65x"; // j2308jq, y6lpqnm, j23y65x

  useEffect(() => {
    fetch(`https://creatopy-cdn-b1a8267.s3.amazonaws.com/designs/${hash}/json`)
      .then((res) => res.json())
      .then((design: Design) => {
        setDesignProperties(design.banner.properties);
        setElementBatches(design.banner.elements as JsonSlide[]);
      });
  }, []);

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

                  return <Component key={el.properties.id} {...el} />;
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
