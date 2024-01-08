import { useEffect, useState } from "react";
import { JsonButton, JsonSvg } from "../../types";

function SVG({ properties, additionalData: svgImageData }: JsonSvg & { additionalData: string }) {
  const {
    x,
    y,
    width,
    height,
    opacity,
    rotation,
    dropShadow,
    url,
    originalHeight,
    originalWidth,
    colorGroups,
  } = properties;

  return (
    <div
      className="element"
      style={{
        left: x,
        top: y,
        width,
        height,
        opacity: 1,
        mixBlendMode: "normal",
        transform: `translate3d(0px, 0px, 0px)`,
      }}
      // style="transform: translate3d(0px, 0px, 0px); left: 84px; top: 137px; width: 35px; height: 24px; opacity: 1; mix-blend-mode: normal;"
    >
      <div
        className="svg"
        style={{
          transform: `rotate(${rotation}deg) scale(1, 1) perspective(1px)`,
          opacity: opacity / 100,
        }}
        // style="transform: rotate(0deg) scale(1, 1) perspective(1px); opacity: 1;"
      >
        <img src={svgImageData} className="svg-img" id="e_47" />
      </div>
    </div>
  );
}

{
  /* <div
  className="element"
  id="e_39"
  data-layer-type="svg"
  style="transform: translate3d(0px, 0px, 0px); left: 84px; top: 137px; width: 35px; height: 24px; opacity: 1; mix-blend-mode: normal;"
>
  <div className="eff-helper" id="e_40" style="animation-play-state: running;">
    <div className="move" id="e_42" style="width: 100%; height: 100%;">
      <div className="rotate" id="e_43" style="width: 100%; height: 100%;">
        <div className="scale" id="e_44" style="width: 100%; height: 100%;">
          <div className="opacity" id="e_45" style="width: 100%; height: 100%;">
            <div className="blur" id="e_46" style="width: 100%; height: 100%;">
              <div
                className="svg"
                id="e_41"
                style="transform: rotate(0deg) scale(1, 1) perspective(1px); opacity: 1;"
              >
                <img
                  src='data:image/svg+xml;charset=UTF-8,%3Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 181.845 117.121" style="enable-background:new 0 0 181.845 117.121;" xml:space="preserve" width="100%25" height="100%25" preserveAspectRatio="none"%3E%3Crect style=";" width="181.845" height="117.121" fill="%23ffeb7f" data-color-group="0"%3E%3C/rect%3E%3Cpath style=";" d="M41.438,86.932c0,1.853-0.235,3.538-0.704,5.057c-0.446,1.496-1.139,2.79-2.076,3.885 c-0.915,1.094-2.099,1.931-3.55,2.512c-1.429,0.581-3.115,0.871-5.057,0.871s-3.639-0.29-5.091-0.871 c-1.429-0.603-2.612-1.44-3.55-2.512c-0.915-1.094-1.608-2.4-2.077-3.918c-0.446-1.518-0.67-3.204-0.67-5.057 c0-2.479,0.402-4.633,1.205-6.463c0.826-1.831,2.076-3.248,3.751-4.254c1.697-1.027,3.851-1.541,6.463-1.541 c2.59,0,4.722,0.514,6.397,1.541c1.674,1.004,2.914,2.433,3.717,4.286C41.025,82.299,41.438,84.454,41.438,86.932z M23.989,86.932 c0,1.674,0.212,3.115,0.636,4.32c0.424,1.205,1.083,2.132,1.976,2.779c0.893,0.647,2.043,0.972,3.449,0.972 c1.452,0,2.612-0.324,3.483-0.972c0.893-0.647,1.541-1.574,1.942-2.779c0.424-1.205,0.636-2.646,0.636-4.32 c0-2.523-0.469-4.499-1.406-5.928c-0.937-1.429-2.479-2.143-4.622-2.143c-1.429,0-2.59,0.324-3.483,0.972 c-0.893,0.647-1.552,1.574-1.976,2.779C24.201,83.817,23.989,85.258,23.989,86.932z M54.027,80.301c1.965,0,3.538,0.536,4.722,1.608 c1.183,1.049,1.775,2.746,1.775,5.091v11.922h-4.99V88.238c0-1.317-0.235-2.3-0.704-2.948c-0.469-0.67-1.217-1.004-2.244-1.004 c-1.518,0-2.557,0.524-3.115,1.574c-0.558,1.027-0.837,2.512-0.837,4.455v8.607h-4.99V80.636h3.817l0.67,2.344h0.268 c0.402-0.625,0.893-1.127,1.473-1.507c0.581-0.402,1.228-0.693,1.942-0.871C52.531,80.402,53.268,80.301,54.027,80.301z M70.847,80.301c1.697,0,3.148,0.324,4.354,0.972c1.228,0.647,2.177,1.585,2.847,2.813c0.67,1.228,1.004,2.735,1.004,4.521v2.411 H67.263c0.045,1.407,0.458,2.511,1.239,3.316c0.803,0.803,1.909,1.205,3.316,1.205c1.183,0,2.255-0.112,3.215-0.334 c0.961-0.245,1.954-0.614,2.981-1.105v3.851c-0.893,0.446-1.842,0.77-2.847,0.972c-0.983,0.224-2.177,0.334-3.584,0.334 c-1.831,0-3.449-0.334-4.856-1.004c-1.407-0.693-2.512-1.731-3.316-3.115c-0.803-1.384-1.205-3.126-1.205-5.224 c0-2.143,0.357-3.918,1.072-5.325c0.737-1.429,1.752-2.5,3.048-3.215C67.62,80.658,69.127,80.301,70.847,80.301z M70.881,83.851 c-0.96,0-1.764,0.313-2.411,0.938c-0.625,0.625-0.993,1.596-1.105,2.914h7c0-0.737-0.135-1.395-0.403-1.976 c-0.245-0.581-0.624-1.038-1.138-1.373C72.31,84.018,71.662,83.851,70.881,83.851z M95.175,75.01c2.121,0,3.896,0.201,5.324,0.603 c1.452,0.38,2.534,1.016,3.248,1.909c0.737,0.871,1.105,2.054,1.105,3.55c0,0.893-0.145,1.708-0.435,2.445 c-0.29,0.737-0.714,1.34-1.272,1.809c-0.535,0.469-1.194,0.77-1.976,0.904v0.167c0.804,0.156,1.53,0.435,2.177,0.837 c0.648,0.402,1.162,0.983,1.541,1.741c0.38,0.759,0.57,1.764,0.57,3.014c0,1.452-0.358,2.701-1.073,3.751 c-0.692,1.027-1.696,1.82-3.014,2.378c-1.317,0.536-2.88,0.803-4.688,0.803H87.74V75.01H95.175z M95.744,84.487 c1.473,0,2.49-0.235,3.048-0.704c0.581-0.469,0.871-1.15,0.871-2.043c0-0.915-0.334-1.574-1.004-1.976 c-0.67-0.402-1.731-0.603-3.182-0.603h-2.679v5.324L95.744,84.487L95.744,84.487z M92.798,88.506v6.229h3.315 c1.519,0,2.58-0.29,3.182-0.871c0.603-0.603,0.904-1.395,0.904-2.378c0-0.603-0.135-1.128-0.403-1.574 c-0.245-0.446-0.681-0.793-1.306-1.038c-0.624-0.245-1.473-0.368-2.545-0.368H92.798z M114.997,80.268 c2.456,0,4.332,0.535,5.626,1.608c1.318,1.05,1.976,2.668,1.976,4.856v12.19h-3.483l-0.971-2.479h-0.135 c-0.514,0.647-1.049,1.183-1.607,1.608c-0.536,0.424-1.162,0.725-1.876,0.904c-0.692,0.201-1.552,0.302-2.579,0.302 c-1.072,0-2.043-0.201-2.914-0.603c-0.848-0.424-1.518-1.061-2.009-1.909c-0.492-0.871-0.737-1.965-0.737-3.282 c0-1.942,0.681-3.371,2.043-4.286c1.362-0.938,3.405-1.452,6.129-1.541l3.181-0.101v-0.803c0-0.96-0.257-1.663-0.77-2.11 c-0.492-0.446-1.183-0.67-2.077-0.67c-0.893,0-1.764,0.134-2.612,0.402c-0.848,0.245-1.697,0.558-2.545,0.938l-1.642-3.382 c0.983-0.514,2.065-0.915,3.248-1.205C112.452,80.412,113.702,80.268,114.997,80.268z M115.701,90.516 c-1.608,0.045-2.724,0.334-3.349,0.871c-0.625,0.536-0.937,1.239-0.937,2.11c0,0.759,0.223,1.306,0.669,1.642 c0.447,0.313,1.027,0.469,1.742,0.469c1.073,0,1.976-0.313,2.713-0.938c0.737-0.647,1.105-1.552,1.105-2.712V90.45L115.701,90.516z M135.745,80.301c1.965,0,3.538,0.536,4.722,1.608c1.183,1.049,1.775,2.746,1.775,5.091v11.922h-4.99V88.238 c0-1.317-0.234-2.3-0.704-2.948c-0.469-0.67-1.216-1.004-2.243-1.004c-1.519,0-2.557,0.524-3.115,1.574 c-0.558,1.027-0.837,2.512-0.837,4.455v8.607h-4.99V80.636h3.817l0.67,2.344h0.268c0.402-0.625,0.893-1.127,1.473-1.507 c0.581-0.402,1.228-0.693,1.942-0.871C134.249,80.402,134.986,80.301,135.745,80.301z M150.02,84.855 c0,0.692-0.034,1.384-0.101,2.077c-0.045,0.67-0.1,1.351-0.167,2.043h0.067c0.223-0.313,0.446-0.625,0.67-0.938 c0.245-0.313,0.491-0.625,0.736-0.938c0.246-0.313,0.503-0.614,0.771-0.904l5.124-5.559h5.627l-7.268,7.938l7.703,10.348h-5.761 l-5.258-7.401l-2.143,1.708v5.694h-4.99V73.469h4.99V84.855z" fill="%23234faf" data-color-group="1"%3E%3C/path%3E%3Cpath style=";" d="M95.699,28.284h10.334v26.094c0,0.684-0.065,1.346-0.188,1.991c-0.017,0.092-0.044,0.183-0.059,0.275 c-0.317,1.453-0.937,2.794-1.781,3.962c-1.932,2.643-5.049,4.365-8.564,4.365H59.674c2.982-5.237,8.612-8.601,14.78-8.601h16.922 c3.343,0,6.055-2.712,6.055-6.055V32.522C97.431,30.872,96.769,29.375,95.699,28.284z" fill="%23234faf" data-color-group="1"%3E%3C/path%3E%3Cpath style=";" d="M59.674,17.864h19.969c-2.74,1.852-4.742,4.753-5.393,8.187c-0.027,0.134-0.054,0.275-0.071,0.415 c-6.061-0.097-11.561-3.44-14.5-8.601h-0.004V17.864z" fill="%23234faf" data-color-group="1"%3E%3C/path%3E%3Cpath style=";" d="M86.833,17.864h35.761c-2.982,5.237-8.612,8.601-14.78,8.601H90.891 c-3.337,0-6.055,2.718-6.055,6.055v17.795c0,1.647,0.661,3.144,1.733,4.235h-10.34V28.456c0-0.684,0.065-1.346,0.189-1.991 c0.937-4.893,5.248-8.601,10.41-8.601H86.833z" fill="%23234faf" data-color-group="1"%3E%3C/path%3E%3Cpath style=";" d="M108.089,56.375c6.061,0.096,11.561,3.439,14.5,8.601h-19.974c1.212-0.818,2.288-1.852,3.171-3.062 c1.049-1.443,1.781-3.052,2.158-4.79l0.016-0.061c0.016-0.092,0.038-0.183,0.054-0.275c0.027-0.134,0.054-0.275,0.071-0.42 L108.089,56.375z" fill="%23234faf" data-color-group="1"%3E%3C/path%3E%3C/svg%3E'
                  className="svg-img"
                  id="e_47"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}

export default SVG;
