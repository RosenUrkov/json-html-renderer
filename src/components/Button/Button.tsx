import { JsonButton } from "../../types";

function Button({ properties }: JsonButton) {
  const {
    x,
    y,
    width,
    height,
    opacity,
    rotation,
    dropShadow,
    backgroundColor,
    labelStyle,
    labelOffsetX,
    labelOffsetY,
    buttonLabel,
    border,
  } = properties;

  return (
    <div
      className="element"
      id="e_31"
      data-layer-type="button"
      style={{
        left: x,
        top: y,
        width,
        height,
        opacity: 1,
        mixBlendMode: "normal",
        pointerEvents: "auto",
        transform: `translate3d(0px, 0px, 0px)`,
      }}
      // style="transform: translate3d(0px, 0px, 0px); left: 0px; top: 242px; width: 336px; height: 38px; opacity: 1; mix-blend-mode: normal; pointer-events: auto;"
    >
      <div
        className="eff-helper"
        id="e_32"
        style={{
          animation: `1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.4s 1 normal both running alpha_buildIn`,
        }}
        //   style="animation: 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.4s 1 normal both running alpha_buildIn;"
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
            //   style="width: 100%; height: 100%;"
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
                //   style="width: 100%; height: 100%;"
              >
                <div
                  className="blur"
                  id="e_38"
                  style={{ width: "100%", height: "100%" }}
                  // style="width: 100%; height: 100%;"
                >
                  <div
                    className="bs-btn btn139"
                    id="e_33"
                    style={{
                      width,
                      height,
                      backgroundColor: `rgb(255, 255, 255)`,
                      opacity: 1,
                      borderRadius: border?.radius,
                    }}
                    //   style="background-color: rgb(255, 255, 255); opacity: 1; width: 336px; height: 38px; border-radius: 1px;"
                  >
                    <label
                      className="bs-btn-label"
                      id="e_39"
                      dir="ltr"
                      style={{
                        marginLeft: labelOffsetX,
                        marginTop: labelOffsetY,
                        fontFamily: labelStyle.fontFamily,
                        fontStyle: labelStyle.fontStyle,
                        fontWeight: labelStyle.fontWeight,
                        fontSize: labelStyle.fontSize,
                        letterSpacing: labelStyle.letterSpacing,
                        color: labelStyle.color,
                      }}
                      // style="margin-left: 0px; margin-top: 0px; font-family: Roboto; font-style: normal; font-weight: 700; font-size: 16px; color: rgb(0, 191, 243); letter-spacing: 0px;"
                    >
                      {buttonLabel}
                    </label>
                  </div>
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
//   data-layer-type="button"
//   style="transform: translate3d(0px, 0px, 0px); left: 0px; top: 242px; width: 336px; height: 38px; opacity: 1; mix-blend-mode: normal; pointer-events: auto;"
// >
//   <div
//     className="eff-helper"
//     id="e_32"
//     style="animation: 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.4s 1 normal both running alpha_buildIn;"
//   >
//     <div className="move" id="e_34" style="width: 100%; height: 100%;">
//       <div className="rotate" id="e_35" style="width: 100%; height: 100%;">
//         <div className="scale" id="e_36" style="width: 100%; height: 100%;">
//           <div className="opacity" id="e_37" style="width: 100%; height: 100%;">
//             <div className="blur" id="e_38" style="width: 100%; height: 100%;">
//               <div
//                 className="bs-btn btn139"
//                 id="e_33"
//                 style="background-color: rgb(255, 255, 255); opacity: 1; width: 336px; height: 38px; border-radius: 1px;"
//               >
//                 <label
//                   className="bs-btn-label"
//                   id="e_39"
//                   dir="ltr"
//                   style="margin-left: 0px; margin-top: 0px; font-family: Roboto; font-style: normal; font-weight: 700; font-size: 16px; color: rgb(0, 191, 243); letter-spacing: 0px;"
//                 >
//                   See Deals
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;

export default Button;
