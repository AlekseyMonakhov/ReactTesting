import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays information about the repository', async() => {
    const repository = {
        stargazers_count: 2,
        open_issues: 1,
        forks: 0,
        language:'JavaScript',
    };


    render(<RepositoriesSummary repository={repository}/>)

    for (const repositoryKey in repository) {
        const text = new RegExp(repository[repositoryKey])
        const element = screen.getByText(text);

        expect(element).toBeInTheDocument();
    }

})