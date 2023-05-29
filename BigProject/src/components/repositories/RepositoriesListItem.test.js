import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { MemoryRouter } from "react-router";


// jest.mock('../tree/FileIcon', () => {
//   return () => {
//     return 'File Icon Component'
//   }
// })

function renderComponent() {
  const repository = {
    full_name: "facebook",
    language: "JavaScript",
    description: "a js lib",
    owner: {
      login: "facebook"
    },
    name: "react",
    html_url: "https://github.com/facebook/react",
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return {repository}
}

test("component show a link to repo", async () => {
  const {repository} = renderComponent();

  await screen.findByRole('img', {name: 'JavaScript'});

  const link = screen.getByRole('link', {
    name: /github repository/i,
  });

  expect(link).toHaveAttribute('href', repository.html_url);

});


test('shows a file icon with icon', async () => {
  const {repository} = renderComponent();

  const icon = await screen.findByRole('img', {name: 'JavaScript'});

  expect(icon).toHaveClass('js-icon')

})


test('shows a link to the code editor page', async() => {
  const {repository} = renderComponent();


   await screen.findByRole('img', {name: 'JavaScript'});

  const link = await screen.findByRole('link', {name: new RegExp(repository.owner.login)})


  expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`)
})

const pause = () => {
  return new Promise((res,rej) => {
    setTimeout(() => {
      res();
    }, 100)
  })
}
