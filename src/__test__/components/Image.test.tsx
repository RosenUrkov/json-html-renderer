/* eslint-disable */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Image from '../../components/Image/Image';

describe('Image Component', () => {
  const mockProps = {
    properties: {
      x: '10px',
      y: '20px',
      width: '100px',
      height: '50px',
      opacity: 80,
      blendMode: 'multiply',
      rotation: 45,
      contentOffsetX: 50,
      contentOffsetY: 50,
      url: 'example.jpg',
      dropShadow: { useShadow: true, color: 'rgba(0, 0, 0, 0.5)', hShadow: 10, vShadow: 10, blur: 5 },
      adjustColor: { useAdjustColor: true, brightness: 20, contrast: 30, saturate: 40, hue: 50 },
    },
  };

  it('renders without crashing', () => {
    render(<Image {...(mockProps as any)} />);
    expect(screen.getByTestId('image')).toBeInTheDocument();
  });

  it('applies correct positioning styles', () => {
    render(<Image {...(mockProps as any)} />);
    const image = screen.getByTestId('image');
    expect(image).toHaveStyle('left: 10px');
    expect(image).toHaveStyle('top: 20px');
  });

  it('renders with correct size and opacity', () => {
    render(<Image {...(mockProps as any)} />);
    const imageDiv = screen.getByTestId('image').querySelector('.bs-image');
    expect(imageDiv).toHaveStyle('width: 100px');
    expect(imageDiv).toHaveStyle('height: 50px');
    expect(imageDiv).toHaveStyle('opacity: 0.8');
  });

  it('renders with correct image URL', () => {
    render(<Image {...(mockProps as any)} />);
    const imageDiv = screen.getByTestId('image').querySelector('.bs-image');
    expect(imageDiv).toHaveStyle(
      `background-image: url(//d2gla4g2ia06u2.cloudfront.net/assets/media/${mockProps.properties.url})`,
    );
  });

  it('applies correct transformations and filters', () => {
    render(<Image {...(mockProps as any)} />);
    const transformContainer = screen.getByTestId('image').querySelector('.transform-container');
    const imageDiv = screen.getByTestId('image').querySelector('.bs-image');
    expect(transformContainer).toHaveStyle(`transform: rotate(${mockProps.properties.rotation}deg)`);
    expect(imageDiv).toHaveStyle(
      `filter: drop-shadow(${mockProps.properties.dropShadow.color} ${mockProps.properties.dropShadow.hShadow}px ${
        mockProps.properties.dropShadow.vShadow
      }px ${mockProps.properties.dropShadow.blur}px) brightness(1.${
        mockProps.properties.adjustColor.brightness
      }) contrast(1.${mockProps.properties.adjustColor.contrast}) saturate(${
        mockProps.properties.adjustColor.saturate + 100
      }) hue-rotate(${mockProps.properties.adjustColor.hue}deg)`,
    );
  });
});
