import { DesignData } from './types';
import Layout from './components/Layout/Layout';
import SlideLayout from './components/Layout/SlideLayout';
import { componentsByType } from './utils';

function App({ designProperties, elementBatches, additionalElementsData }: DesignData) {
  return (
    <>
      {designProperties && (
        <Layout {...designProperties}>
          {elementBatches.map((batch) => {
            return (
              <SlideLayout key={batch.properties.bannersetElementId} {...batch.properties}>
                {batch.elements.map((el) => {
                  const Component = componentsByType.find((c) => c.type === el.layerType)?.component as
                    | React.FC
                    | undefined;

                  if (!Component) {
                    return <div key={el.properties.id}>No such element!</div>;
                  }

                  const props = { ...el, additionalElementData: additionalElementsData[el.properties.id] };
                  return <Component key={el.properties.id} {...props} />;
                })}
              </SlideLayout>
            );
          })}
        </Layout>
      )}
    </>
  );
}

export default App;
