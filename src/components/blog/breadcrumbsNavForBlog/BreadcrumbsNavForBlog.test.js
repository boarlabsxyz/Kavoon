import React from 'react';

import { expect, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BreadcrumbsNavForBlog from './BreadcrumbsNavForBlog';
import lang from 'src/i18n/lang';

describe('BreadcrumbsNavForBlog', () => {
  it('renders english locale', () => {
    const language = 'english';
    const vm = {
      breadcrumbs: [
        { name: 'Blog', src: '/blog' },
        { name: 'About us', src: '#' },
      ],
    };

    render(<BreadcrumbsNavForBlog language={language} vm={vm} />);

    const firstBreadcrum = screen.getByText(
      lang(vm.breadcrumbs.at(0).name, language)
    );
    expect(firstBreadcrum).toBeInTheDocument();
  });
});
