import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="card-title mb-3">Dashboard</h2>
        <p className="text-secondary mb-0">
          Track workouts, celebrate progress, and keep your team moving toward their goals.
        </p>
      </div>
    </div>
  )
}

function Teams() {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="card-title mb-3">Teams</h2>
        <p className="text-secondary mb-0">
          Build teams, compare streaks, and challenge friends in weekly fitness competitions.
        </p>
      </div>
    </div>
  )
}

function Workouts() {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="card-title mb-3">Workouts</h2>
        <p className="text-secondary mb-0">
          Follow personalized recommendations and log activities to keep momentum strong.
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4 px-3">
          <div className="container-fluid">
            <span className="navbar-brand fw-bold">OctoFit Tracker</span>
            <div className="navbar-nav flex-row gap-3">
              <NavLink className="nav-link" to="/">
                Dashboard
              </NavLink>
              <NavLink className="nav-link" to="/teams">
                Teams
              </NavLink>
              <NavLink className="nav-link" to="/workouts">
                Workouts
              </NavLink>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
