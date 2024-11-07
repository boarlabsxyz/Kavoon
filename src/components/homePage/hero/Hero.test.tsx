import { render, screen } from '@testing-library/react';

import Hero from './Hero';

jest.mock('src/components/common/container', () => ({ children }) => (
  <div>{children}</div>
));
jest.mock('src/components/homePage/title', () => () => <h1>title</h1>);
jest.mock('src/components/homePage/subtitle', () => ({ language }) => (
  <h2>subtitle {language}</h2>
));

describe('<Hero />', () => {
  const mockLocale = 'en';
  beforeEach(() => {
    render(<Hero lang={mockLocale} />);
  });

  test('renders the Hero section', () => {
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  test('renders the Title component', () => {
    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('title');
  });

  test('renders the Subtitle component with correct language prop', () => {
    const subtitle = screen.getByRole('heading', { level: 2 });

    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(`subtitle ${mockLocale}`);
  });
});
