import mongoose, { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    difficulty: { type: String, required: true },
    duration: { type: String, required: true },
    focus: { type: String, required: true },
  },
  { timestamps: true },
);

const Workout = mongoose.models.Workout || model('Workout', workoutSchema);

export default Workout;
