import { render, screen } from '@testing-library/react';

import Advantage from './Advantage';

const props = [
  { locale: 'en', token: 'HandMade', text: 'hand made' },
  { locale: 'pl', token: 'HandMade', text: 'Ręczna robota' },
  { locale: 'uk', token: 'HandMade', text: 'Ручна робота' },
] as const;

describe.each(props)('<Advantage />', ({ locale, token, text }) => {
  test('should render the component', () => {
    render(<Advantage name={token} language={locale} />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  test('should have appropreate description', () => {
    render(<Advantage name={token} language={locale} />);

    expect(screen.getByRole('listitem')).toHaveTextContent(text);
  });

  test('should correctly render an image', () => {
    render(<Advantage name={token} language={locale} />);

    const image = screen.getByRole('img');
    const src = `/icons/${token}.svg`;

    expect(image).toHaveAttribute('alt', text);
    expect(image).toHaveAttribute('src', src);
  });
});
