import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders h1 Element', () => {
//   render(<App />);
//   screen.debug();
//   const linkElement = screen.getByText("Hello world from React!");
//   expect(linkElement).toBeInTheDocument();
// });


// test('list contains 5 animals', () => {
//   render(<App />);
//   screen.debug();
//   const listElement = screen.getByRole('list');
//   const listItems = screen.getAllByRole('listitem')
//   expect(listElement).toBeInTheDocument();
//   expect(listElement).toHaveClass('animals');
//   expect(listItems.length).toEqual(5);
// });

test('user name is rendered', async() => {
  render(<App/>);
  const userName = await screen.findByText('Jack');
  expect(userName).toBeInTheDocument();

})