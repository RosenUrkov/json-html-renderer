import { JsonText } from "../../types";

function Text({ properties }: JsonText) {
  const {
    x,
    y,
    width,
    height,
    opacity,
    rotation,
    dropShadow,
    blendMode,
    buildIn,
    alignment,
    lineHeight,
    letterSpacing,
    config: {
      nodes: [paragraph],
    },
  } = properties;

  return (
    <div
      className="element"
      id="e_40"
      data-layer-type="text"
      style={{
        left: x * 2.5,
        top: y,
        width,
        height,
        opacity: 1,
        mixBlendMode: blendMode,
        pointerEvents: "auto",
        transform: `translate3d(0px, 0px, 0px)`,
      }}
      // style="transform: translate3d(0px, 0px, 0px); left: 11px; top: 20px; width: 313.388px; height: 81.6294px; opacity: 1; mix-blend-mode: normal; pointer-events: auto;"
    >
      <div
        className="eff-helper"
        id="e_41"
        style={{
          animation: `${buildIn?.duration}s cubic-bezier(0.19, 1, 0.22, 1) 0s normal both running slide_buildIn_0_50_0`,
        }}
        // style="animation: 1s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal both running slide_buildIn_0_50_0;"
      >
        <div
          className="move"
          id="e_43"
          style={{ width: "100%", height: "100%" }}
          // style="width: 100%; height: 100%;"
        >
          <div
            className="rotate"
            id="e_44"
            style={{ width: "100%", height: "100%" }}
            // style="width: 100%; height: 100%;"
          >
            <div
              className="scale"
              id="e_45"
              style={{ width: "100%", height: "100%" }}
              // style="width: 100%; height: 100%;"
            >
              <div
                className="opacity"
                id="e_46"
                style={{ width: "100%", height: "100%" }}
                // style="width: 100%; height: 100%;"
              >
                <div
                  className="blur"
                  id="e_47"
                  style={{ width: "100%", height: "100%" }}
                  // style="width: 100%; height: 100%;"
                >
                  <div
                    className="text"
                    id="e_42"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      opacity: 1,
                      textAlign: alignment,
                      lineHeight,
                      letterSpacing,
                      width,
                      height,
                    }}
                    // style="transform: rotate(0deg); opacity: 1; text-align: center; line-height: 1.3; letter-spacing: 0px; width: 313.388px; height: 81.6294px;"
                  >
                    <div
                      className="innerDisplayContainer"
                      id="e_48"
                      dir="ltr"
                      style={{
                        transformOrigin: "0px 0px",
                      }}
                      // style="transform-origin: 0px 0px;"
                    >
                      <div
                        className="row"
                        style={{
                          fontWeight: paragraph.defaultFontSettings?.fontWeight,
                          fontStyle: paragraph.defaultFontSettings?.fontStyle,
                          fontFamily: paragraph.defaultFontSettings?.fontFamily,
                          fontSize: 32,
                        }}
                        // style="font-size:31.485624174998197px;font-weight:400;font-style:normal;font-family:'Passion One';"
                      >
                        <span
                          className="row-item"
                          style={{
                            fontStyle: (paragraph.children[0] as any)
                              .fontSettings?.fontStyle,
                            fontFamily: (paragraph.children[0] as any)
                              .fontSettings?.fontFamily,
                            fontWeight: (paragraph.children[0] as any)
                              .fontSettings?.fontWeight,
                            textDecoration: (paragraph.children[0] as any)
                              .textDecoration,
                            position: "relative",
                            textTransform: (paragraph.children[0] as any)
                              .textTransform,
                            color: (paragraph.children[0] as any).color,
                            fontSize: 32,
                          }}
                          // style="position:relative;text-decoration:none;text-transform:none;font-family:'Passion One';font-weight:400;font-style:normal;color:#fdfdfd;font-size:31.485624174998197px;"
                        >
                          {(paragraph.children[0] as any).text}
                        </span>
                      </div>
                    </div>
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
//   id="e_40"
//   data-layer-type="text"
//   style="transform: translate3d(0px, 0px, 0px); left: 11px; top: 20px; width: 313.388px; height: 81.6294px; opacity: 1; mix-blend-mode: normal; pointer-events: auto;"
// >
//   <div
//     className="eff-helper"
//     id="e_41"
//     style="animation: 1s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal both running slide_buildIn_0_50_0;"
//   >
//     <div className="move" id="e_43" style="width: 100%; height: 100%;">
//       <div className="rotate" id="e_44" style="width: 100%; height: 100%;">
//         <div className="scale" id="e_45" style="width: 100%; height: 100%;">
//           <div className="opacity" id="e_46" style="width: 100%; height: 100%;">
//             <div className="blur" id="e_47" style="width: 100%; height: 100%;">
//               <div
//                 className="text"
//                 id="e_42"
//                 style="transform: rotate(0deg); opacity: 1; text-align: center; line-height: 1.3; letter-spacing: 0px; width: 313.388px; height: 81.6294px;"
//               >
//                 <div
//                   className="innerDisplayContainer"
//                   id="e_48"
//                   dir="ltr"
//                   style="transform-origin: 0px 0px;"
//                 >
//                   <div
//                     className="row"
//                     style="font-size:31.485624174998197px;font-weight:400;font-style:normal;font-family:'Passion One';"
//                   >
//                     <span
//                       className="row-item"
//                       style="position:relative;text-decoration:none;text-transform:none;font-family:'Passion One';font-weight:400;font-style:normal;color:#fdfdfd;font-size:31.485624174998197px;"
//                     >
//                       PLAN YOUR VACATION AHEAD
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;

export default Text;
