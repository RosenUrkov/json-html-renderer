import { PropsWithChildren } from 'react';
import { JsonSlideProperties } from '../../types';

function SlideLayout(properties: PropsWithChildren<JsonSlideProperties>) {
  const { children } = properties;

  return <div>{children}</div>;
}

export default SlideLayout;
