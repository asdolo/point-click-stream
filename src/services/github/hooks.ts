
import { useMemo } from 'react';
import { type InfiniteData } from '@tanstack/react-query';

import { type OctokitResponse } from '@octokit/types';

import { flatPages } from '~/services/github/utils';

export const useFlatPages = <T = unknown>(data?: InfiniteData<OctokitResponse<T>>) =>
	useMemo(() => flatPages(data), [data]);
