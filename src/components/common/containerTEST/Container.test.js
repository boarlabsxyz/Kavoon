import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container component', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <p>Test Child</p>
      </Container>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('applies the default class from styles', () => {
    const { container } = render(
      <Container>
        <p>Test Child</p>
      </Container>
    );
    expect(container.firstChild).toHaveClass('container');
  });
});
