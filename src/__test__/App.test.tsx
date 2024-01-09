/* eslint-disable */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../components/Layout/Layout', () => {
  return {
    __esModule: true,
    default: (props: any) => <div data-testid="layout">{props.children}</div>,
  };
});

jest.mock('../utils', () => ({
  componentsByType: [
    { type: 'text', component: (props: any) => <div data-testid="text-component">{props.children}</div> },
  ],
}));

describe('App Component', () => {
  const mockData = {
    designProperties: { name: 'name' },
    elementBatches: [
      {
        properties: { bannersetElementId: 1 },
        elements: [{ properties: { id: 1 }, layerType: 'text' }],
      },
    ],
    additionalElementsData: {},
  };

  it('renders without crashing', () => {
    render(<App {...(mockData as any)} />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders element batches correctly', () => {
    render(<App {...(mockData as any)} />);
    const textComponents = screen.getAllByTestId('text-component');
    expect(textComponents).toHaveLength(mockData.elementBatches[0].elements.length);
  });

  it('displays "No such element!" when component type is missing', () => {
    const newData = {
      ...mockData,
      elementBatches: [
        {
          properties: { bannersetElementId: 1 },
          elements: [{ properties: { id: 1 }, layerType: 'unknown' }],
        },
      ],
    };
    render(<App {...(newData as any)} />);
    expect(screen.getByText('No such element!')).toBeInTheDocument();
  });

  it('renders Layout component when design properties are passed', () => {
    render(<App {...(mockData as any)} />);
    expect(screen.queryByTestId('layout')).not.toBeNull();
  });

  it('does not render Layout when designProperties are missing', () => {
    const newData = { ...mockData, designProperties: null };
    render(<App {...(newData as any)} />);
    expect(screen.queryByTestId('layout')).toBeNull();
  });
});
