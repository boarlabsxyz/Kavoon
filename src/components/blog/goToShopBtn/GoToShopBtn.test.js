import { expect, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import GoToShopBtn from './GoToShopBtn';
import lang from 'src/i18n/lang';

describe('GoToShopBtn', () => {
  it('renders english locale', () => {
    const language = 'english';

    render(<GoToShopBtn language={language} />);

    const ReturnToShopText = screen.getByText(lang('ReturnToShop', language));
    expect(ReturnToShopText).toBeInTheDocument();
  });
});
