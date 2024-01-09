/* eslint-disable */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Shape from '../../components/Shape/Shape';

describe('Shape Component', () => {
  const mockProps = {
    properties: {
      x: '10px',
      y: '20px',
      width: '100px',
      height: '50px',
      opacity: 80,
      rotation: 45,
      blendMode: 'multiply',
      backgroundColor: { scolor: '#123456' },
    },
  };

  it('renders without crashing', () => {
    render(<Shape {...(mockProps as any)} />);
    expect(screen.getByTestId('shape')).toBeInTheDocument();
  });

  it('applies correct positioning styles', () => {
    render(<Shape {...(mockProps as any)} />);
    const shape = screen.getByTestId('shape');
    expect(shape).toHaveStyle('left: 10px');
    expect(shape).toHaveStyle('top: 20px');
  });

  it('renders with correct size and opacity', () => {
    render(<Shape {...(mockProps as any)} />);
    const shapeDiv = screen.getByTestId('shape').querySelector('.shape');
    expect(shapeDiv).toHaveStyle('opacity: 0.8');
  });

  it('applies correct blend mode', () => {
    render(<Shape {...(mockProps as any)} />);
    const shape = screen.getByTestId('shape');
    expect(shape).toHaveStyle('mix-blend-mode: multiply');
  });

  it('applies correct rotation and background color', () => {
    render(<Shape {...(mockProps as any)} />);
    const shapeDiv = screen.getByTestId('shape').querySelector('.shape');
    expect(shapeDiv).toHaveStyle('transform: rotate(45deg)');
    expect(shapeDiv).toHaveStyle('background-color: #123456');
  });
});
