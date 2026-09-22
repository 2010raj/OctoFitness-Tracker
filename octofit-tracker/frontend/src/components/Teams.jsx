import ResourceTable from './ResourceTable.jsx';

const teamsEndpointMeta = {
  endpoint: 'teams',
  url: import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
    : 'http://localhost:8000/api/teams/',
};

export default function Teams() {
  return (
    <ResourceTable
      title="Teams"
      description="Monitor team scores and member counts to keep everyone motivated."
      endpoint={teamsEndpointMeta.endpoint}
      fields={['name', 'score', 'members']}
      emptyMessage="No teams have been created yet."
    />
  );
}
