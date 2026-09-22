import ResourceTable from './ResourceTable.jsx';

const workoutsEndpointMeta = {
  endpoint: 'workouts',
  url: import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/',
};

export default function Workouts() {
  return (
    <ResourceTable
      title="Workouts"
      description="Explore recommended sessions and training intensity options."
      endpoint={workoutsEndpointMeta.endpoint}
      fields={['title', 'difficulty', 'duration', 'focus']}
      emptyMessage="No workout plans are available yet."
    />
  );
}
