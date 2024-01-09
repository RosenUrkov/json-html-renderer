/* eslint-disable */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '../../components/Button/Button';

describe('Button Component', () => {
  const mockProps = {
    properties: {
      x: '10px',
      y: '20px',
      width: '100px',
      height: '50px',
      opacity: 80,
      backgroundColor: { scolor: '#fff' },
      labelStyle: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        letterSpacing: '1px',
        color: '#000',
      },
      labelOffsetX: '5px',
      labelOffsetY: '10px',
      buttonLabel: 'Click Me',
      border: { radius: '5px' },
    },
  };

  it('renders without crashing', () => {
    render(<Button {...(mockProps as any)} />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('applies correct positioning styles', () => {
    render(<Button {...(mockProps as any)} />);
    const button = screen.getByTestId('button');
    expect(button).toHaveStyle('left: 10px');
    expect(button).toHaveStyle('top: 20px');
  });

  it('renders with correct styles', () => {
    render(<Button {...(mockProps as any)} />);
    const button = screen.getByTestId('button').querySelector('.bs-btn');
    expect(button).toHaveStyle('width: 100px');
    expect(button).toHaveStyle('height: 50px');
    expect(button).toHaveStyle('background-color: #fff');
    expect(button).toHaveStyle('opacity: 0.8');
    expect(button).toHaveStyle('border-radius: 5px');
  });

  it('displays button label correctly', () => {
    render(<Button {...(mockProps as any)} />);
    expect(screen.getByText(mockProps.properties.buttonLabel)).toBeInTheDocument();
  });

  it('applies label styles correctly', () => {
    render(<Button {...(mockProps as any)} />);
    const label = screen.getByText(mockProps.properties.buttonLabel);
    expect(label).toHaveStyle('font-family: Arial');
    expect(label).toHaveStyle('font-style: normal');
    expect(label).toHaveStyle('font-weight: bold');
    expect(label).toHaveStyle('font-size: 16px');
    expect(label).toHaveStyle('letter-spacing: 1px');
    expect(label).toHaveStyle('color: #000');
  });
});
