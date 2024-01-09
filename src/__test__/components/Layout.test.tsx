/* eslint-disable */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../../components/Layout/Layout';

describe('Layout Component', () => {
  const mockProps = {
    width: 100,
    height: 100,
    backgroundColor: {
      useBorder: false,
      type: 'solid',
      borderColor: '#000',
      scolor: '#fff',
    },
  };

  it('renders without crashing', () => {
    render(
      <Layout {...(mockProps as any)}>
        <div>Test</div>
      </Layout>,
    );
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders with correct width and height', () => {
    render(
      <Layout {...(mockProps as any)}>
        <div>Test</div>
      </Layout>,
    );
    const layoutDiv = screen.getByTestId('layout');
    expect(layoutDiv).toHaveStyle('width: 100px');
    expect(layoutDiv).toHaveStyle('height: 100px');
  });

  it('renders with specified background color', () => {
    render(
      <Layout {...(mockProps as any)}>
        <div>Test</div>
      </Layout>,
    );
    expect(screen.getByTestId('layout')).toHaveStyle('background-color: #fff');
  });

  it('renders with border when useBorder is true', () => {
    const newProps = { ...mockProps, backgroundColor: { ...mockProps.backgroundColor, useBorder: true } };
    render(
      <Layout {...(newProps as any)}>
        <div>Test</div>
      </Layout>,
    );
    expect(screen.getByTestId('layout')).toHaveStyle('border: 1px solid #000');
  });

  it('does not render border when useBorder is false', () => {
    render(
      <Layout {...(mockProps as any)}>
        <div>Test</div>
      </Layout>,
    );
    expect(screen.getByTestId('layout')).not.toHaveStyle('border: 1px solid #000');
  });
});
