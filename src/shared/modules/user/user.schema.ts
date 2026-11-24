import { Schema } from 'mongoose';

import { USER_TYPES } from '../../../types/user.type.js';

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 15
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    avatar: {
      type: String
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 12
    },

    type: {
      type: String,
      enum: USER_TYPES,
      required: true
    }
  },
  {
    timestamps: true
  }
);
