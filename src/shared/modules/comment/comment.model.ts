import { model } from 'mongoose';

import { CommentSchema } from './comment.schema.js';

export const CommentModel = model('Comment', CommentSchema);
