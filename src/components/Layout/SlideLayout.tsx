import { PropsWithChildren, useEffect, useState } from "react";
import {
  JsonDesignProperties,
  JsonElement,
  JsonSlideProperties,
} from "../../types";

function SlideLayout(properties: PropsWithChildren<JsonSlideProperties>) {
  const { children } = properties;

  return <div>{children}</div>;
}

export default SlideLayout;
