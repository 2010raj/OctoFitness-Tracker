# OctoFit Tracker Frontend

## Environment setup

The frontend depends on a GitHub Codespaces environment variable named `VITE_CODESPACE_NAME`.

Copy the example file before running the app:

```bash
cp .env.example .env.local
```

Then set the code space name in `.env.local`, for example:

```env
VITE_CODESPACE_NAME=my-codespace
```

When `VITE_CODESPACE_NAME` is defined, the app calls the backend with URLs such as:

```text
https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/
```

If `VITE_CODESPACE_NAME` is not set, the app falls back to `http://localhost:8000` to avoid invalid `https://undefined-8000...` URLs.
