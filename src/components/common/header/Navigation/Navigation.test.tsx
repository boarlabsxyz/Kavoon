import React from 'react';

import { BehaviorSubject } from 'rxjs';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Navigation from './Navigation';

import { Language } from 'src/types/language';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

const mockedUsePathname = require('next/navigation').usePathname;

jest.mock('src/data/viewModels/shopListVM', () =>
  jest.fn(() => ({
    shopPageStatusVM: {
      cartStatusVM: { count: new BehaviorSubject(0), href: '' },
    },
  }))
);

const testLang: Language = 'en';

const renderComponent = (
  children = <div>Child Content</div>,
  lang = testLang
) => render(<Navigation lang={lang}>{children}</Navigation>);

describe('Navigation component', () => {
  beforeEach(() => {
    mockedUsePathname.mockReturnValue('/test-path');
  });

  it('renders the Navigation component', async () => {
    await act(async () => {
      renderComponent();
    });
    expect(
      screen.getByRole('button', { name: 'mobile-menu-button' })
    ).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('toggles the menu on button click', async () => {
    await act(async () => {
      renderComponent();
    });
    const button = screen.getByRole('button', { name: 'mobile-menu-button' });
    await userEvent.click(button);
    expect(document.body.classList).toContain('no-scroll');
    expect(button.parentElement).toHaveClass('mobileMenuIsOpen');
    await userEvent.click(button);
    expect(document.body.classList).not.toContain('no-scroll');
    expect(button.parentElement).not.toHaveClass('mobileMenuIsOpen');
  });

  it('removes open class on pathname change', async () => {
    const { rerender } = renderComponent();
    const button = screen.getByRole('button', { name: 'mobile-menu-button' });
    await userEvent.click(button);
    expect(button.parentElement).toHaveClass('mobileMenuIsOpen');

    mockedUsePathname.mockReturnValue('/new-path');
    rerender(
      <Navigation lang={testLang}>
        <div>Child Content</div>
      </Navigation>
    );

    expect(button.parentElement).not.toHaveClass('mobileMenuIsOpen');
  });
});
