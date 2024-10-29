import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useRx from 'src/hooks/useRx';
import productDetailsKitCheckboxVM from './productDetailsKitCheckboxVM';

const vm = productDetailsKitCheckboxVM();

const MockComponent: React.FC = () => {
  const isChecked = useRx(vm.isChecked$);

  return (
    <div>
      <label data-testid="label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => vm.toggleChecked(isChecked)}
          data-testid="checkbox"
        />
        {vm.label}
      </label>
    </div>
  );
};

describe('productDetailsKitCheckboxVM', () => {
  test('initial state is unchecked', () => {
    render(<MockComponent />);
    const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  test('toggles the checkbox state', async () => {
    const user = userEvent.setup();

    render(<MockComponent />);
    const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;
    const label = screen.getByTestId('label') as HTMLInputElement;

    expect(checkbox).not.toBeChecked();

    await user.click(label);
    expect(checkbox).toBeChecked();

    await user.click(label);
    expect(checkbox).not.toBeChecked();
  });
});
