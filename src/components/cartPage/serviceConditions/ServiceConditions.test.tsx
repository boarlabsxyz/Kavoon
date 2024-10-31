import { render, screen } from '@testing-library/react';
import ServiceConditions from './ServiceConditions';
import lang from 'src/i18n/lang';

jest.mock('i18n/lang', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('<ServiceConditions />', () => {
  const section = 'delivery';
  const language = 'en';

  beforeEach(() => {
    (lang as jest.Mock).mockImplementation((key, locale) => {
      const translations = {
        en: {
          delivery: 'Delivery',
          deliveryDetails: 'Delivery details',
        },
      };
      return translations[locale][key];
    });
  });

  it('renders the section with a title', () => {
    render(<ServiceConditions section={section} language={language} />);

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Delivery');
  });

  it('renders the ServiceConditionsDetails component with correct text', () => {
    render(<ServiceConditions section={section} language={language} />);

    const details = screen.getByText('Delivery details');
    expect(details).toBeInTheDocument();
  });
});
