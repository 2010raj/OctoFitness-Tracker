import ResourceTable from './ResourceTable.jsx';

export default function Workouts() {
  return (
    <ResourceTable
      title="Workouts"
      description="Explore recommended sessions and training intensity options."
      endpoint="workouts"
      fields={['title', 'difficulty', 'duration', 'focus']}
      emptyMessage="No workout plans are available yet."
    />
  );
}
