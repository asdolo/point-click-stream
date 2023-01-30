import { useInfiniteQuery } from '@tanstack/react-query';

import { getIssues } from '~/services/github';

export const useGetIssues = () => useInfiniteQuery({
	queryKey: ['issues'],
	queryFn: ({ pageParam: nextPageURL}) => getIssues({nextPageURL}),
	getNextPageParam: (lastPage) => {
		return ((lastPage.headers.link || '').match(
			/<([^>]+)>;\s*rel="next"/
		) || [])[1];
	},
});
