import { Schema } from 'mongoose';
const AuthorSchema = new Schema(
  {
    id: String,
    name: String,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    created_at: Number,
    updated_at: Number,
  },
  {
    versionKey: false,
  },
);

export default AuthorSchema;
