import { render, screen } from '@testing-library/react';
import ServiceConditionsDetails from './ServiceConditionsDetails';

describe('<ServiceConditionsDetails />', () => {
  it('renders the list items based on the provided text', () => {
    const text = 'First sentence\nSecond sentence\nThird sentence';
    render(<ServiceConditionsDetails text={text} />);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('First sentence');
    expect(items[1]).toHaveTextContent('Second sentence');
    expect(items[2]).toHaveTextContent('Third sentence');
  });
});
