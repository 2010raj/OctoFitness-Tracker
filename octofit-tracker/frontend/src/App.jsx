import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/teams', label: 'Teams' },
  { to: '/users', label: 'Users' },
  { to: '/workouts', label: 'Workouts' },
];

function Dashboard() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="card shadow-sm border-0">
          <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <p className="text-uppercase small text-primary fw-semibold mb-2">OctoFit Tracker</p>
              <h2 className="card-title mb-1">Dashboard</h2>
              <p className="text-secondary mb-0">
                Track workouts, celebrate progress, and keep your team moving toward their goals.
              </p>
            </div>
            <img
              src="../../docs/octofitapp-small.png"
              alt="OctoFit logo"
              width="84"
              height="84"
              className="rounded-circle border"
            />
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="alert alert-info mb-0" role="alert">
          {codespaceName
            ? `VITE_CODESPACE_NAME is set to "${codespaceName}". The app will call https://${codespaceName}-8000.app.github.dev/api/... while running in GitHub Codespaces.`
            : 'VITE_CODESPACE_NAME is not defined. Add it to .env.local (for example VITE_CODESPACE_NAME=my-codespace) or the app will fall back to http://localhost:8000.'}
        </div>
      </div>

      {navItems.slice(1).map((item) => (
        <div key={item.to} className="col-md-6 col-xl-4">
          <NavLink to={item.to} className="text-decoration-none">
            <div className="card h-100 shadow-sm border-0 bg-light-subtle">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-primary-subtle text-primary mb-3">{item.label}</span>
                  <h3 className="h5 mb-2">{item.label}</h3>
                </div>
                <p className="text-secondary mb-0">
                  Review live data from the {item.label.toLowerCase()} API endpoints.
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="container py-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4 px-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold" to="/">
            OctoFit Tracker
          </NavLink>
          <div className="navbar-nav flex-row gap-3 flex-wrap">
            {navItems.map((item) => (
              <NavLink key={item.to} className="nav-link" to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
