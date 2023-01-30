import {request} from '@octokit/request';

import { OctokitResponse } from '@octokit/types';

import { GitHubIssue } from './types';

const DEFAULT_PAGINATION_SIZE = 10;

export const getIssues = ({nextPageURL}: {nextPageURL?: string}): Promise<OctokitResponse<GitHubIssue>> => {
	const options = request.endpoint('GET /repos/{owner}/{repo}/issues', {
		owner: 'asdolo',
		repo: 'point-click-stream',
		per_page: DEFAULT_PAGINATION_SIZE,
	});
	const {method, headers} = options;
	const url = nextPageURL ?? options.url;

	return request({ method, url, headers });
};
