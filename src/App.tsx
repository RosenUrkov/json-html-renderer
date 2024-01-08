import { useEffect, useState } from "react";
import { JsonDesignProperties, JsonElement } from "./types";
import Image from "./components/Image/Image";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import Layout from "./components/Layout/Layout";
import SVG from "./components/SVG/SVG";
import Shape from "./components/Shape/Shape";

function App() {
  const [designProperties, setDesignProperties] =
    useState<JsonDesignProperties>();
  const [elements, setElements] = useState<JsonElement[]>([]);

  const hash = "j23y65x"; // j2308jq, y6lpqnm, j23y65x

  useEffect(() => {
    fetch(`https://creatopy-cdn-b1a8267.s3.amazonaws.com/designs/${hash}/json`)
      .then((x) => x.json())
      .then((x: any) => {
        const elements = x.banner.elements.flatMap(
          (y: any) => y.elements as JsonElement[],
        );
        setDesignProperties(x.banner.properties);
        setElements(elements);
        console.log(elements, "log");
      });
  }, []);

  return (
    <div>
      {designProperties && (
        <Layout {...designProperties}>
          {elements &&
            elements.map((el) => {
              if (el.layerType === "image") {
                return <Image key={el.properties.id} {...el} />;
              }
              if (el.layerType === "text") {
                return <Text key={el.properties.id} {...el} />;
              }
              if (el.layerType === "button") {
                return <Button key={el.properties.id} {...el} />;
              }
              if (el.layerType === "svg") {
                return <SVG key={el.properties.id} {...el} />;
              }
              if (el.layerType === "shape") {
                return <Shape key={el.properties.id} {...el} />;
              }

              return <div key={el.properties.id}>No such element</div>;
            })}
        </Layout>
      )}
    </div>
  );
}

export default App;
