import express, { type Request, type Response } from 'express';
import { connectToDatabase } from './config/database.js';
import Activity from './models/Activity.js';
import LeaderboardEntry from './models/LeaderboardEntry.js';
import Team from './models/Team.js';
import User from './models/User.js';
import Workout from './models/Workout.js';

const app = express();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());

const createResourceHandlers = (resource: string, model: any) => {
  const router = express.Router();

  router.get('/', async (_req: Request, res: Response) => {
    const data = await model.find({}).lean();

    res.json({
      message: `List of ${resource}`,
      count: data.length,
      data,
      apiUrl: `${baseUrl}/api/${resource}/`,
    });
  });

  router.post('/', async (req: Request, res: Response) => {
    const payload = req.body ?? {};
    const created = await model.create(payload);

    res.status(201).json({
      message: `Created ${resource.slice(0, -1)} record`,
      data: created,
    });
  });

  return router;
};

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    ok: true,
    service: 'OctoFit Tracker API',
    status: 'running',
    url: baseUrl,
  });
});

app.get('/api', (_req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the OctoFit Tracker API',
    baseUrl,
    routes: ['/api/health', '/api/users/', '/api/teams/', '/api/activities/', '/api/leaderboard/', '/api/workouts/'],
  });
});

app.use('/api/users/', createResourceHandlers('users', User));
app.use('/api/teams/', createResourceHandlers('teams', Team));
app.use('/api/activities/', createResourceHandlers('activities', Activity));
app.use('/api/leaderboard/', createResourceHandlers('leaderboard', LeaderboardEntry));
app.use('/api/workouts/', createResourceHandlers('workouts', Workout));

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`OctoFit Tracker API running on ${baseUrl}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
