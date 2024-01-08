import { JsonImage } from "../../types";

function Image({ properties }: JsonImage) {
  const {
    x,
    y,
    width,
    height,
    opacity,
    blendMode,
    rotation,
    contentScale,
    scaleMode,
    contentOffsetX,
    contentOffsetY,
    url,
    dropShadow,
    adjustColor,
  } = properties;

  const dropShadowValue =
    dropShadow?.useShadow &&
    `drop-shadow(${dropShadow?.color} ${dropShadow?.hShadow}px ${dropShadow?.vShadow}px ${dropShadow?.blur}px)`;

  const adjustColorValue =
    adjustColor?.useAdjustColor &&
    `brightness(1.${adjustColor.brightness}) contrast(1.${
      adjustColor.contrast
    }) saturate(${adjustColor.saturate + 100}) hue-rotate(${
      adjustColor.hue
    }deg)`;

  return (
    <div
      className="element"
      id="e_4"
      data-layer-type="image"
      style={{
        left: x,
        top: y,
        width,
        height,
        opacity: 1,
        mixBlendMode: blendMode,
        transform: `translate3d(0px, 0px, 0px)`,
      }}
      // style="transform: translate3d(0px, 0px, 0px); left: 188px; top: 98.5px; width: 98.9px; height: 90.6932px; opacity: 1; mix-blend-mode: normal;"
    >
      <div
        className="eff-helper"
        id="e_5"
        style={{
          animationPlayState: "running",
        }}
        // style="animation-play-state: running;"
      >
        <div
          className="move"
          id="e_7"
          style={{ width: `100%`, height: `100%` }}
          // style="width: 100%; height: 100%;"
        >
          <div
            className="rotate"
            id="e_8"
            style={{ width: `100%`, height: `100%` }}
            // style="width: 100%; height: 100%;"
          >
            <div
              className="scale"
              id="e_9"
              style={{ width: `100%`, height: `100%` }}
              // style="width: 100%; height: 100%;"
            >
              <div
                className="opacity"
                id="e_10"
                style={{ width: `100%`, height: `100%` }}
                // style="width: 100%; height: 100%;"
              >
                <div
                  className="blur"
                  id="e_11"
                  style={{ width: `100%`, height: `100%` }}
                  // style="width: 100%; height: 100%;"
                >
                  <div
                    className="transform-container"
                    id="e_12"
                    style={{
                      width: `100%`,
                      height: `100%`,
                      transform: `translateZ(0px) rotate(${rotation}deg) scale(1, 1)`,
                    }}
                    //   style="height: 100%; width: 100%; transform: translateZ(0px) rotate(344deg) scale(1, 1);"
                  >
                    <div
                      className="bs-image image-crop"
                      id="e_6"
                      style={{
                        backgroundImage: `url(//d2gla4g2ia06u2.cloudfront.net/assets/media/${url})`,
                        filter: `${adjustColorValue}`,
                        backgroundPosition: `${contentOffsetX}% ${contentOffsetY}%`,
                        opacity: opacity / 100,
                        willChange: "filter",
                        width,
                        height,
                      }}
                      // style="background-image: url(&quot;//d2gla4g2ia06u2.cloudfront.net/assets/media/69jgj8&quot;);filter: brightness(1.21) contrast(1.13) saturate(0) hue-rotate(0deg);background-position: 50% 50%;opacity: 0.73;"
                      // style='background-image: url("//d2gla4g2ia06u2.cloudfront.net/assets/media/4dwjo1"); filter: drop-shadow(rgba(0, 0, 0, 0.27) 5px 4px 12px); will-change: filter; background-position: 50% 50%; opacity: 1;'
                    ></div>
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

export default Image;

{
  /* <div
  className="element"
  id="e_4"
  data-layer-type="image"
  style="transform: translate3d(0px, 0px, 0px); left: 188px; top: 98.5px; width: 98.9px; height: 90.6932px; opacity: 1; mix-blend-mode: normal;"
>
  <div className="eff-helper" id="e_5" style="animation-play-state: running;">
    <div className="move" id="e_7" style="width: 100%; height: 100%;">
      <div className="rotate" id="e_8" style="width: 100%; height: 100%;">
        <div className="scale" id="e_9" style="width: 100%; height: 100%;">
          <div className="opacity" id="e_10" style="width: 100%; height: 100%;">
            <div className="blur" id="e_11" style="width: 100%; height: 100%;">
              <div
                className="transform-container"
                id="e_12"
                style="height: 100%; width: 100%; transform: translateZ(0px) rotate(344deg) scale(1, 1);"
              >
                <div
                  className="bs-image image-crop"
                  id="e_6"
                  style='background-image: url("//d2gla4g2ia06u2.cloudfront.net/assets/media/4dwjo1"); filter: drop-shadow(rgba(0, 0, 0, 0.27) 5px 4px 12px); will-change: filter; background-position: 50% 50%; opacity: 1;'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
