import ResourceTable from './ResourceTable.jsx';

export default function Activities() {
  return (
    <ResourceTable
      title="Activities"
      description="Review recent workouts, calories, and movement trends from the tracker."
      endpoint="activities"
      fields={['userId', 'type', 'durationMinutes', 'calories', 'date']}
      emptyMessage="No activity logs are available yet."
    />
  );
}
