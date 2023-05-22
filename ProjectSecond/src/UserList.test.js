import { render, screen } from "@testing-library/react";
import UserList from "./UserList";


function renderComponent() {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "jane@sam.com" },
  ];

  const { container } = render(<UserList users={users} />);

  return {
    users,
    container
  }
}


test("render one row per user", () => {
  const {container} = renderComponent()

  // const rows = within(screen.getByTestId('users')).getAllByRole('row');
  const rows = container.querySelectorAll("table > tbody tr");

  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const {users} = renderComponent()

  //screen.logTestingPlaygroundURL()

  for (const user of users) {
    const name = screen.getByRole("cell", {
      name: user.name,
    });

    const email = screen.getByRole("cell", {
      name: user.email,
    });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
