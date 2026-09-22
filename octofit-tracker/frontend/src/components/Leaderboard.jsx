import ResourceTable from './ResourceTable.jsx';

export default function Leaderboard() {
  return (
    <ResourceTable
      title="Leaderboard"
      description="See how each team is stacking up across the current challenge."
      endpoint="leaderboard"
      fields={['rank', 'name', 'team', 'points']}
      emptyMessage="No leaderboard entries are available yet."
    />
  );
}
