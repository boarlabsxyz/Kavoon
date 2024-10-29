import { render, screen } from '@testing-library/react';

import Subtitle from './Subtitle';

describe('<Subtitle />', () => {
  const locales = [
    { locale: 'en', text: 'Individual sewing of bags' },
    { locale: 'pl', text: 'Indywidualne szycie toreb' },
    { locale: 'uk', text: 'Індивідуальний пошив сумок' },
  ] as const;

  test('should render the component', () => {
    render(<Subtitle language="en" />);

    const title = screen.getByRole('heading', {
      level: 2,
    });

    expect(title).toBeInTheDocument();
  });

  test.each(locales)(
    'should have appropriate text content',
    ({ locale, text }) => {
      render(<Subtitle language={locale} />);

      const title = screen.getByRole('heading', {
        level: 2,
      });

      expect(title).toHaveTextContent(new RegExp(text));
    }
  );
});
