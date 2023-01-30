import { type InfiniteData } from '@tanstack/react-query';

import { type OctokitResponse } from '@octokit/types';

export const flatPages = <T = unknown>(
	data?: InfiniteData<OctokitResponse<T>>
) => data?.pages.map(page => page.data).flat() ?? [];
