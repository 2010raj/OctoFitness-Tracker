import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({
        ok: true,
        service: 'OctoFit Tracker API',
        status: 'running',
    });
});
app.get('/api', (_req, res) => {
    res.json({
        message: 'Welcome to the OctoFit Tracker API',
        routes: ['/api/health'],
    });
});
async function startServer() {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB at', mongoUri);
        app.listen(port, () => {
            console.log(`OctoFit Tracker API running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}
startServer();
