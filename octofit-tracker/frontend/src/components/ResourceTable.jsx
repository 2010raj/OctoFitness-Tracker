import { useEffect, useState } from 'react';
import { getApiUrl, normalizeRecords } from '../utils/api.js';

export default function ResourceTable({
  title,
  description,
  endpoint,
  fields,
  emptyMessage = 'No records available.',
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadRecords() {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(getApiUrl(endpoint));
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        const records = normalizeRecords(payload);

        if (isMounted) {
          setItems(records);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message || 'Unable to load records.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRecords();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  const tableFields = fields?.length ? fields : Object.keys(items[0] ?? {});

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
          <div>
            <h2 className="card-title mb-1">{title}</h2>
            {description ? <p className="text-secondary mb-0">{description}</p> : null}
          </div>
          <span className="badge bg-light text-dark border">{items.length} items</span>
        </div>

        {loading ? (
          <div className="alert alert-light border">Loading {title.toLowerCase()}…</div>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : items.length === 0 ? (
          <div className="alert alert-light border">{emptyMessage}</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  {tableFields.map((field) => (
                    <th key={field} scope="col" className="text-capitalize">
                      {field}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={`${item._id ?? item.id ?? item.name ?? index}`}>
                    {tableFields.map((field) => {
                      const value = item[field];
                      const displayValue =
                        typeof value === 'object' && value !== null ? JSON.stringify(value) : value ?? '—';

                      return <td key={`${field}-${index}`}>{String(displayValue)}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
