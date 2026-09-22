import ResourceTable from './ResourceTable.jsx';

export default function Users() {
  return (
    <ResourceTable
      title="Users"
      description="Browse member profiles, team affiliations, and points totals."
      endpoint="users"
      fields={['name', 'email', 'team', 'points']}
      emptyMessage="No users have been added yet."
    />
  );
}
