/* eslint-disable */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SVG from '../../components/SVG/SVG';

describe('SVG Component', () => {
  const mockProps = {
    properties: {
      x: '10px',
      y: '20px',
      width: '100px',
      height: '50px',
      opacity: 80,
      rotation: 45,
    },
    additionalElementData: '/path/to/svg/image.svg',
  };

  it('renders without crashing', () => {
    render(<SVG {...(mockProps as any)} />);
    expect(screen.getByTestId('svg')).toBeInTheDocument();
  });

  it('applies correct positioning styles', () => {
    render(<SVG {...(mockProps as any)} />);
    const svgElement = screen.getByTestId('svg');
    expect(svgElement).toHaveStyle('left: 10px');
    expect(svgElement).toHaveStyle('top: 20px');
  });

  it('renders with correct size and opacity', () => {
    render(<SVG {...(mockProps as any)} />);
    const svgDiv = screen.getByTestId('svg').querySelector('.svg');
    expect(svgDiv).toHaveStyle('opacity: 0.8');
  });

  it('applies correct rotation', () => {
    render(<SVG {...(mockProps as any)} />);
    const svgDiv = screen.getByTestId('svg').querySelector('.svg');
    expect(svgDiv).toHaveStyle('transform: rotate(45deg)');
  });

  it('displays correct SVG image', () => {
    render(<SVG {...(mockProps as any)} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', mockProps.additionalElementData);
  });
});
