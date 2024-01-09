/* eslint-disable */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Text from '../../components/Text/Text';

describe('Text Component', () => {
  const mockProps = {
    properties: {
      x: '10px',
      y: '20px',
      width: 100,
      height: 50,
      opacity: 80,
      rotation: 45,
      blendMode: 'multiply',
      alignment: 'center',
      lineHeight: '1.5',
      letterSpacing: '1px',
      fontSize: 16,
      scale: 1,
      textDirection: 'ltr',
      config: {
        nodes: [
          {
            defaultFontSettings: { fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'Arial' },
            children: [{ text: 'Hello World', fontSettings: { fontWeight: 'bold', color: '#000' } }],
          },
        ],
      },
    },
  };

  it('renders without crashing', () => {
    render(<Text {...(mockProps as any)} />);
    expect(screen.getByTestId('text')).toBeInTheDocument();
  });

  it('applies correct positioning and sizing styles', () => {
    render(<Text {...(mockProps as any)} />);
    const textElement = screen.getByTestId('text');
    expect(textElement).toHaveStyle('left: 10px');
    expect(textElement).toHaveStyle('top: 20px');
    expect(textElement).toHaveStyle('width: 100px');
    expect(textElement).toHaveStyle('height: 50px');
  });

  it('applies correct text styling', () => {
    render(<Text {...(mockProps as any)} />);
    const textDiv = screen.getByTestId('text').querySelector('.text');
    expect(textDiv).toHaveStyle('text-align: center');
    expect(textDiv).toHaveStyle('line-height: 1.5');
    expect(textDiv).toHaveStyle('letter-spacing: 1px');
  });

  it('renders correct text content', () => {
    render(<Text {...(mockProps as any)} />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies correct transformations and blend mode', () => {
    render(<Text {...(mockProps as any)} />);
    const textDiv = screen.getByTestId('text').querySelector('.text');
    expect(textDiv).toHaveStyle('transform: rotate(45deg)');
    expect(textDiv).toHaveStyle('opacity: 0.8');
  });
});
