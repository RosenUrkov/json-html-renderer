import { useEffect, useState } from "react";
import { JsonElement } from "./types";
import Image from "./components/Image/Image";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";

function App() {
  const [elements, setElements] = useState<JsonElement[]>([]);

  useEffect(() => {
    fetch("https://creatopy-cdn-b1a8267.s3.amazonaws.com/designs/j2308jq/json")
      .then((x) => x.json())
      .then((x: any) => {
        const elements = x.banner.elements.flatMap(
          (y: any) => y.elements as JsonElement[],
        );
        setElements(elements);
        console.log(elements, "log");
      });
  }, []);

  return (
    <div className="App">
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

          return <div key={el.properties.id}>No such element</div>;
        })}
    </div>
  );
}

export default App;
