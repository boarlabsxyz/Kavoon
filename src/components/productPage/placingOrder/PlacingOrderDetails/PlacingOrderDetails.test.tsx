import { render, screen } from '@testing-library/react';
import PlacingOrderDetails from './PlacingOrderDetails';

describe('PlacingOrderDetails', () => {
  it('renders empty list when no text is provided', () => {
    render(<PlacingOrderDetails text="" />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.querySelectorAll('li')).toHaveLength(0);
  });

  it('renders single line of text correctly', () => {
    const testText = 'Single line of text';
    render(<PlacingOrderDetails text={testText} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
    expect(listItems[0]).toHaveTextContent(testText);
  });

  it('renders multiple lines of text correctly', () => {
    const testText = 'First line\nSecond line\nThird line';
    render(<PlacingOrderDetails text={testText} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent('First line');
    expect(listItems[1]).toHaveTextContent('Second line');
    expect(listItems[2]).toHaveTextContent('Third line');
  });

  it('sanitizes HTML content', () => {
    const testText = '<script>alert("test")</script>Safe text';
    render(<PlacingOrderDetails text={testText} />);

    const listItem = screen.getByRole('listitem');
    expect(listItem).toHaveTextContent('Safe text');
    expect(listItem.innerHTML).not.toContain('<script>');
  });

  it('preserves line breaks in text', () => {
    const testText = 'Line 1\nLine 2';
    render(<PlacingOrderDetails text={testText} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems[0]).toHaveTextContent('Line 1');
    expect(listItems[1]).toHaveTextContent('Line 2');
  });

  it('applies correct CSS classes', () => {
    render(<PlacingOrderDetails text="Test" />);

    const list = screen.getByRole('list');
    const listItem = screen.getByRole('listitem');

    expect(list).toHaveClass('detailsList');
    expect(listItem).toHaveClass('detailsListItem');
  });
});
