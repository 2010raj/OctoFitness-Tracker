import ResourceTable from './ResourceTable.jsx';

const activitiesEndpointMeta = {
  endpoint: 'activities',
  url: import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
    : 'http://localhost:8000/api/activities/',
};

export default function Activities() {
  return (
    <ResourceTable
      title="Activities"
      description="Review recent workouts, calories, and movement trends from the tracker."
      endpoint={activitiesEndpointMeta.endpoint}
      fields={['userId', 'type', 'durationMinutes', 'calories', 'date']}
      emptyMessage="No activity logs are available yet."
    />
  );
}
