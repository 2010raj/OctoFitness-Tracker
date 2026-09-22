import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    team: { type: String, required: true },
    points: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const User = mongoose.models.User || model('User', userSchema);

export default User;
