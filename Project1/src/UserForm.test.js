import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";

test("it shows to inputs and a button", async () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");
  const buttons = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(buttons).toBeInTheDocument();
});
