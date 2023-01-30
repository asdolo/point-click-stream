export type GitHubIssue = {
  id: number;
  title: string;
  state: 'open' | 'closed';
  body?: string;
}