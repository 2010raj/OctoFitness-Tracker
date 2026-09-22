import mongoose, { Schema, model } from 'mongoose';
const activitySchema = new Schema({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    calories: { type: Number, required: true },
    date: { type: String, required: true },
}, { timestamps: true });
const Activity = mongoose.models.Activity || model('Activity', activitySchema);
export default Activity;
