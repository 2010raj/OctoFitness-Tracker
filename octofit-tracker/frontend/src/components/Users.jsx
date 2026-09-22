import ResourceTable from './ResourceTable.jsx';

const usersEndpointMeta = {
  endpoint: 'users',
  url: import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/',
};

export default function Users() {
  return (
    <ResourceTable
      title="Users"
      description="Browse member profiles, team affiliations, and points totals."
      endpoint={usersEndpointMeta.endpoint}
      fields={['name', 'email', 'team', 'points']}
      emptyMessage="No users have been added yet."
    />
  );
}
