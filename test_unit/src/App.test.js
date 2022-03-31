import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import UserEvent from'@testing-library/user-event';


test("Counter Increased on clicking of increment button", ()=>{
  render(<App/>);
  const counter = screen.getByTestId("counter");
  const incrementButton = screen.getByText("Increment");
  UserEvent.click(incrementButton);
  UserEvent.click(incrementButton);

  expect(counter.textContent).toEqual('2');
})

test("Counter Increased on clicking of increment button", ()=>{
  render(<App/>);
  const counter = screen.getByTestId("counter");
  const decrementButton = screen.getByText("Decrement");
  UserEvent.click(decrementButton);
  UserEvent.click(decrementButton);

  expect(counter.textContent).toEqual('-2');
})
