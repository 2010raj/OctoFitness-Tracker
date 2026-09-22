import mongoose, { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    score: { type: Number, default: 0 },
    members: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Team = mongoose.models.Team || model('Team', teamSchema);

export default Team;
