import { PropsWithChildren, useEffect, useState } from "react";
import { JsonBackgroundSolid, JsonDesignProperties } from "../../types";

function Layout(properties: PropsWithChildren<JsonDesignProperties>) {
  const { width, height, backgroundColor, bannerSize, children } = properties;

  return (
    <div
      id="bs"
      style={{
        width,
        height,
        border: `1px ${backgroundColor?.type} ${backgroundColor?.borderColor}`,
        backgroundColor: (backgroundColor as JsonBackgroundSolid).scolor,
        transform: `scale(2.5)`,
        transformOrigin: `0px 0px 0px`,
      }}
      //   style="width: 336px; height: 280px; border: 1px solid rgb(0, 191, 243); background-color: rgb(0, 191, 243); transform: scale(2.66964); transform-origin: 0px 0px 0px;"
    >
      <div
        className="bs-helper"
        style={{
          width,
          height,
          zIndex: "auto",
          opacity: 1,
          left: -1,
          top: -1,
          position: "absolute",
        }}
        // style="z-index: auto; width: 336px; height: 280px; left: -1px; top: -1px; position: absolute; opacity: 1;"
      >
        <div
          className="slide"
          style={{
            zIndex: "auto",
            opacity: 1,
            transform: "none",
            perspective: "none",
          }}
          // style="transform: none; z-index: auto; opacity: 1; perspective: none;"
        >
          <div
            className="slide-inner"
            style={{
              width: `100%`,
              height: `100%`,
              zIndex: 0,
              top: 0,
              left: 0,
            }}
            //   style="z-index: 0; width: 100%; height: 100%; top: 0px; left: 0px;"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
