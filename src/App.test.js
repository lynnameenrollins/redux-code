import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import UserEvent from '@testing-library/user-event'
//This is from March 29 class

describe("Testing App component", () =>{
  test('renders h1 Element', () => {
  render(<App />);
  screen.debug();
  const linkElement = screen.getByText("Hello world from React!");
  expect(linkElement).toBeInTheDocument();
});


test('list contains 5 animals', () => {
  render(<App />);
  screen.debug();
  const listElement = screen.getByRole('list');
  const listItems = screen.getAllByRole('listitem')
  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass('animals');
  expect(listItems.length).toEqual(5);
});
// test('user name is rendered', async() => {
//   render(<App/>);
//   const userName = await screen.findByText('Jack');
//   expect(userName).toBeInTheDocument();

// });

// test('Loading test appearing...', async() => {
//   render(<App/>);
//   const loadingText = screen.getByText('Loading...');
//   expect(loadingText).toBeInTheDocument()
//   await waitForElementToBeRemoved(()=>screen.getByText('Loading...'));

// });
test('Counter increased on clicking of increment button', ()=>{
  render(<App/>);
 
  const counter = screen.getByTestId("counter");
  const incrementButton =screen.getByText('Increment');

  UserEvent.click(incrementButton);
  UserEvent.click(incrementButton);

  expect(counter.textContent).toEqual('2');
})
test('Counter decreased on clicking of increment button', ()=>{
  render(<App/>);
 
  const counter = screen.getByTestId("counter");
  const decrementButton =screen.getByText('Decrement');

  UserEvent.click(decrementButton);
  UserEvent.click(decrementButton);

  expect(counter.textContent).toEqual('-2');
})

});
