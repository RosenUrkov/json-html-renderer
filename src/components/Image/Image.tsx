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
  } = properties;

  return (
    <div className="Image">
      <div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: `${width}px`,
          height: `${height}px`,
          opacity,
          mixBlendMode: blendMode,
        }}
        // style="transform: translate3d(0px, 0px, 0px); left: 188px; top: 98.5px; width: 98.9px; height: 90.6932px; opacity: 1; mix-blend-mode: normal;"
      >
        <div
        // style="animation-play-state: running;"
        >
          <div
            style={{ width: `${width}%`, height: `${height}%` }}
            // style="width: 100%; height: 100%;"
          >
            <div
              style={{ width: `${width}%`, height: `${height}%` }}
              // style="width: 100%; height: 100%;"
            >
              <div
                style={{ width: `${width}%`, height: `${height}%` }}
                // style="width: 100%; height: 100%;"
              >
                <div
                  style={{ width: `${width}%`, height: `${height}%` }}
                  // style="width: 100%; height: 100%;"
                >
                  <div
                    style={{ width: `${width}%`, height: `${height}%` }}
                    // style="width: 100%; height: 100%;"
                  >
                    <div
                      style={{
                        width: `${width}%`,
                        height: `${height}%`,
                        transform: `translateZ(0px) rotate(${rotation}deg) scale(1, 1)`,
                      }}
                      //   style="height: 100%; width: 100%; transform: translateZ(0px) rotate(344deg) scale(1, 1);"
                    >
                      <div
                        style={{
                          backgroundImage: `url(//d2gla4g2ia06u2.cloudfront.net/assets/media/${url})`,
                          filter: `drop-shadow(${dropShadow?.color} ${dropShadow?.hShadow}px ${dropShadow?.vShadow}px ${dropShadow?.blur}px)`,
                          backgroundPosition: `${contentOffsetX}% ${contentOffsetY}%`,
                          opacity,
                          width,
                          height,
                        }}
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
