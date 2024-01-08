import { JsonButton, JsonShape, JsonSvg } from "../../types";

function Shape({ properties }: JsonShape) {
  const {
    x,
    y,
    width,
    height,
    opacity,
    rotation,
    dropShadow,
    blendMode,
    backgroundColor,
  } = properties;

  return (
    <div
      className="element"
      id="e_31"
      data-layer-type="shape"
      style={{
        left: x,
        top: y,
        width,
        height,
        opacity: 1,
        mixBlendMode: blendMode,
        transform: `translate3d(0px, 0px, 0px)`,
      }}
      //style="width: 1px; height: 27px; transform: translate3d(0px, 0px, 0px); left: 128px; top: 136px; opacity: 1; mix-blend-mode: normal;"
    >
      <div
        className="eff-helper"
        id="e_32"
        style={{
          animationPlayState: "running",
        }}
        // style="animation-play-state: running;"
      >
        <div
          className="move"
          id="e_34"
          style={{ width: "100%", height: "100%" }}
          // style="width: 100%; height: 100%;"
        >
          <div
            className="rotate"
            id="e_35"
            style={{ width: "100%", height: "100%" }}
            // style="width: 100%; height: 100%;"
          >
            <div
              className="scale"
              id="e_36"
              style={{ width: "100%", height: "100%" }}
              // style="width: 100%; height: 100%;"
            >
              <div
                className="opacity"
                id="e_37"
                style={{ width: "100%", height: "100%" }}
                // style="width: 100%; height: 100%;"
              >
                <div
                  className="blur"
                  id="e_38"
                  style={{ width: "100%", height: "100%" }}
                  // style="width: 100%; height: 100%;"
                >
                  <div
                    className="shape rectangle"
                    id="e_33"
                    style={{
                      transform: `rotate(${rotation}deg) scale(1, 1)`,
                      opacity: opacity / 100,
                      backgroundColor: (backgroundColor as any).scolor,
                    }}
                    // style="background-color: rgb(255, 255, 255); transform: rotate(0deg) scale(1, 1); opacity: 1;"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div
//   className="element"
//   id="e_31"
//   data-layer-type="shape"
//   style="width: 1px; height: 27px; transform: translate3d(0px, 0px, 0px); left: 128px; top: 136px; opacity: 1; mix-blend-mode: normal;"
// >
//   <div className="eff-helper" id="e_32" style="animation-play-state: running;">
//     <div className="move" id="e_34" style="width: 100%; height: 100%;">
//       <div className="rotate" id="e_35" style="width: 100%; height: 100%;">
//         <div className="scale" id="e_36" style="width: 100%; height: 100%;">
//           <div className="opacity" id="e_37" style="width: 100%; height: 100%;">
//             <div className="blur" id="e_38" style="width: 100%; height: 100%;">
//               <div
//                 className="shape rectangle"
//                 id="e_33"
//                 style="background-color: rgb(255, 255, 255); transform: rotate(0deg) scale(1, 1); opacity: 1;"
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;

export default Shape;
