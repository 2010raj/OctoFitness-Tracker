import ResourceTable from './ResourceTable.jsx';

const leaderboardEndpointMeta = {
  endpoint: 'leaderboard',
  url: import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
    : 'http://localhost:8000/api/leaderboard/',
};

export default function Leaderboard() {
  return (
    <ResourceTable
      title="Leaderboard"
      description="See how each team is stacking up across the current challenge."
      endpoint={leaderboardEndpointMeta.endpoint}
      fields={['rank', 'name', 'team', 'points']}
      emptyMessage="No leaderboard entries are available yet."
    />
  );
}
