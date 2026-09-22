import ResourceTable from './ResourceTable.jsx';

export default function Teams() {
  return (
    <ResourceTable
      title="Teams"
      description="Monitor team scores and member counts to keep everyone motivated."
      endpoint="teams"
      fields={['name', 'score', 'members']}
      emptyMessage="No teams have been created yet."
    />
  );
}
