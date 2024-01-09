import { JsonText, JsonTextSlateConfigChildren } from '../../types';

function Text({ properties }: JsonText) {
  const {
    x,
    y,
    width,
    height,
    opacity,
    rotation,
    blendMode,
    alignment,
    lineHeight,
    letterSpacing,
    fontSize,
    scale,
    textDirection,
    config: { nodes },
  } = properties;

  return (
    <div
      data-testid="text"
      className="element"
      style={{
        left: x,
        top: y,
        width: width * scale!,
        height: height * scale!,
        mixBlendMode: blendMode,
        pointerEvents: 'auto',
      }}
    >
      <div
        className="text"
        style={{
          transform: `rotate(${rotation}deg)`,
          opacity: opacity / 100,
          textAlign: alignment,
          lineHeight,
          letterSpacing,
          width: width * scale!,
          height: height * scale!,
        }}
      >
        <div className="innerDisplayContainer" dir={textDirection || 'ltr'}>
          {nodes.map((node, index) => (
            <div
              key={index}
              className="row"
              style={{
                fontWeight: node.defaultFontSettings?.fontWeight,
                fontStyle: node.defaultFontSettings?.fontStyle,
                fontFamily: node.defaultFontSettings?.fontFamily,
                fontSize: fontSize * scale!,
              }}
            >
              {(node.children as JsonTextSlateConfigChildren[]).map((child) => (
                <span
                  key={child.text}
                  className="row-item"
                  style={{
                    fontStyle: child.fontSettings?.fontStyle,
                    fontFamily: child.fontSettings?.fontFamily,
                    fontWeight: child.fontSettings?.fontWeight,
                    textDecoration: child.textDecoration,
                    position: 'relative',
                    textTransform: child.textTransform,
                    color: child.color,
                    fontSize: fontSize * scale!,
                  }}
                >
                  {(child as JsonTextSlateConfigChildren).text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// <div
//   className="element"
//   id="e_13"
//   data-layer-type="text"
//   style="transform: translate3d(0px, 0px, 0px); left: 136px; top: 229px; width: 81.6667px; height: 7.97442px; opacity: 1; mix-blend-mode: normal; pointer-events: auto;"
// >
//   <div
//     className="eff-helper"
//     id="e_14"
//     style="animation: 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.2s 1 normal both running alpha_buildIn;"
//   >
//     <div className="move" id="e_16" style="width: 100%; height: 100%;">
//       <div className="rotate" id="e_17" style="width: 100%; height: 100%;">
//         <div className="scale" id="e_18" style="width: 100%; height: 100%;">
//           <div className="opacity" id="e_19" style="width: 100%; height: 100%;">
//             <div className="blur" id="e_20" style="width: 100%; height: 100%;">
//               <div
//                 className="text"
//                 id="e_15"
//                 style="transform: rotate(0deg);opacity: 1;text-align: center;line-height: 1;letter-spacing: 0.398721px;width: 81.6667px;height: 7.97442px;"
//               >
//                 <div
//                   className="innerDisplayContainer"
//                   id="e_21"
//                   dir="ltr"
//                   style="transform-origin: 0px 0px;"
//                 >
//                   <div
//                     className="row"
//                     style="font-size:8px;font-weight:400;font-style:normal;font-family:'Roboto';"
//                   >
//                     <span
//                       className="row-item"
//                       style="position:relative;text-decoration:none;text-transform:none;font-family:'Roboto';font-weight:400;font-style:normal;color:#272727;font-size:8px;width: 100%;"
//                     >
//                       Rivera Youth Card®
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

{
  /* <div
  className="element"
  id="e_13"
  data-layer-type="text"
  style="transform: translate3d(0px, 0px, 0px); left: 84px; top: 175px; width: 108.5px; height: 13.227px; opacity: 1; mix-blend-mode: normal;"
>
  <div className="eff-helper" id="e_14" style="animation-play-state: running;">
    <div className="move" id="e_16" style="width: 100%; height: 100%;">
      <div className="rotate" id="e_17" style="width: 100%; height: 100%;">
        <div className="scale" id="e_18" style="width: 100%; height: 100%;">
          <div className="opacity" id="e_19" style="width: 100%; height: 100%;">
            <div className="blur" id="e_20" style="width: 100%; height: 100%;">
              <div
                className="text"
                id="e_15"
                style="transform: rotate(0deg); opacity: 1; text-align: left; line-height: 1.1; letter-spacing: 0px; width: 108.5px; height: 13.227px;"
              >
                <div
                  className="innerDisplayContainer"
                  id="e_21"
                  dir="ltr"
                  style="transform-origin: 0px 0px;"
                >
                  <div
                    className="row"
                    style="font-size:6px;font-weight:500;font-style:normal;font-family:'Raleway';"
                  >
                    <span
                      className="row-item"
                      style="position:relative;text-decoration:none;text-transform:none;font-family:'Raleway';font-weight:500;font-style:normal;color:#ffffff;font-size:6px;"
                    >
                      ©2022 One Bank Homes for Better Lives Mortgage. All right
                      reserved
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
</div>; */
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
