import { Schema } from 'mongoose';

export const CommentSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },

  publicationDate: {
    type: Date,
    required: true
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
