import mongoose, { Schema, model } from 'mongoose';
const leaderboardEntrySchema = new Schema({
    rank: { type: Number, required: true },
    name: { type: String, required: true },
    team: { type: String, required: true },
    points: { type: Number, required: true },
}, { timestamps: true });
const LeaderboardEntry = mongoose.models.LeaderboardEntry || model('LeaderboardEntry', leaderboardEntrySchema);
export default LeaderboardEntry;
