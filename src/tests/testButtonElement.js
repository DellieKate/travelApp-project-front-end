import { render , screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App.jsx";


test('button makes number go up by one', async () => {
  render (<App />);
  
  let numberDisplayElement = screen.getByTestId('app-main-button-counter-display');
  let numberIncrementerButton = screen.getByTestId('app-main-button-counter-incrementer');
  
  const user = userEvent.setup();

  await user.click(numberIncrementerButton);

  expect(numberDisplayElement).toHaveTextContext(1);

  await user.click(numberIncrementerButton);
  await user.click(numberIncrementerButton);
  await user.click(numberIncrementerButton);

  expect(numberDisplayElement).toHaveTextContext(4);
});
