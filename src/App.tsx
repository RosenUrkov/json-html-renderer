import { DesignData } from './types';
import Layout from './components/Layout/Layout';
import { componentsByType } from './utils';

function App({ designProperties, elementBatches, additionalElementsData }: DesignData) {
  return (
    <>
      {designProperties && (
        <Layout {...designProperties}>
          {elementBatches.map((batch) => {
            return (
              <div key={batch.properties.bannersetElementId}>
                {batch.elements.map((el) => {
                  const Component = componentsByType[el.layerType] as React.FC | undefined;

                  if (!Component) {
                    return <div key={el.properties.id}>No such element!</div>;
                  }

                  const props = { ...el, additionalElementData: additionalElementsData[el.properties.id] };
                  return <Component key={el.properties.id} {...props} />;
                })}
              </div>
            );
          })}
        </Layout>
      )}
    </>
  );
}

export default App;
