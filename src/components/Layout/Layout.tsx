import { PropsWithChildren } from 'react';
import { JsonBackgroundSolid, JsonDesignProperties } from '../../types';

function Layout(properties: PropsWithChildren<JsonDesignProperties>) {
  const { width, height, backgroundColor, children } = properties;

  return (
    <div
      data-testid="layout"
      id="bs"
      style={{
        width,
        height,
        border: backgroundColor?.useBorder ? `1px ${backgroundColor?.type} ${backgroundColor?.borderColor}` : '',
        backgroundColor: (backgroundColor as JsonBackgroundSolid).scolor,
      }}
    >
      <div
        className="bs-helper"
        style={{
          width,
          height,
        }}
      >
        <div className="slide">
          <div className="slide-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
