import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import LeaderboardEntry from '../models/LeaderboardEntry.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        console.log('Seed the octofit_db database with test data');
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            LeaderboardEntry.deleteMany({}),
            Workout.deleteMany({}),
        ]);
        const users = await User.insertMany([
            { name: 'Ava Johnson', email: 'ava@mergington.edu', team: 'Blue Falcons', points: 120 },
            { name: 'Noah Patel', email: 'noah@mergington.edu', team: 'Red Hawks', points: 95 },
            { name: 'Mia Chen', email: 'mia@mergington.edu', team: 'Blue Falcons', points: 140 },
            { name: 'Leo Garcia', email: 'leo@mergington.edu', team: 'Green Giants', points: 130 },
        ]);
        const teams = await Team.insertMany([
            { name: 'Blue Falcons', score: 1280, members: 12 },
            { name: 'Red Hawks', score: 1190, members: 10 },
            { name: 'Green Giants', score: 1345, members: 11 },
        ]);
        await Activity.insertMany([
            {
                userId: String(users[0]._id),
                type: 'Running',
                durationMinutes: 35,
                calories: 320,
                date: '2026-09-20',
            },
            {
                userId: String(users[1]._id),
                type: 'Strength',
                durationMinutes: 45,
                calories: 420,
                date: '2026-09-21',
            },
            {
                userId: String(users[2]._id),
                type: 'Walking',
                durationMinutes: 50,
                calories: 260,
                date: '2026-09-22',
            },
            {
                userId: String(users[3]._id),
                type: 'Cycling',
                durationMinutes: 42,
                calories: 390,
                date: '2026-09-23',
            },
        ]);
        await LeaderboardEntry.insertMany([
            { rank: 1, name: users[2].name, team: teams[0].name, points: users[2].points },
            { rank: 2, name: users[0].name, team: teams[0].name, points: users[0].points },
            { rank: 3, name: users[1].name, team: teams[1].name, points: users[1].points },
            { rank: 4, name: users[3].name, team: teams[2].name, points: users[3].points },
        ]);
        await Workout.insertMany([
            { title: '5K Tempo Run', difficulty: 'Intermediate', duration: '30 min', focus: 'Cardio' },
            { title: 'Core Strength Circuit', difficulty: 'Beginner', duration: '20 min', focus: 'Strength' },
            { title: 'Mobility Recovery Flow', difficulty: 'Easy', duration: '15 min', focus: 'Recovery' },
            { title: 'Hill Sprint Intervals', difficulty: 'Advanced', duration: '25 min', focus: 'Power' },
        ]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
