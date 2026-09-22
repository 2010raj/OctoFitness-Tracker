export function getApiUrl(component) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';

  return `${baseUrl}/api/${component}/`;
}

export function normalizeRecords(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  const candidateKeys = ['data', 'results', 'items', 'records'];

  for (const key of candidateKeys) {
    const value = payload[key];
    if (Array.isArray(value)) {
      return value;
    }
  }

  for (const key of candidateKeys) {
    const value = payload[key];
    if (value && typeof value === 'object') {
      const nested = normalizeRecords(value);
      if (nested.length > 0) {
        return nested;
      }
    }
  }

  return [];
}
