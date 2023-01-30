import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';

import {useFlatPages} from '~/services/github/hooks';
import { useGetIssues } from '~/services/github/queries';

import './App.css';

const Issues = () => {
	const { data, isLoading, hasNextPage, fetchNextPage } = useGetIssues();

	const issues = useFlatPages(data);

	return (
		<div>
			<button onClick={() => fetchNextPage()} disabled={!hasNextPage}>Get next page</button>
			{isLoading && <div>Loading...</div>}
			<div className="games-container">
				{issues.map((issue) => <span key={issue.id}>{issue.title}</span>)}
			</div>
		</div>
	);
};

const queryClient = new QueryClient();


const App = () => (
	<QueryClientProvider client={queryClient}>
		<Issues />
	</QueryClientProvider>
);

export default App;
