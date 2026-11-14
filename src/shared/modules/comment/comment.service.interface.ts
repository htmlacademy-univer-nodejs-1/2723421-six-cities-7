import type { CommentEntity } from './comment.entity.js';

export interface CommentService {
  create(comment: CommentEntity): Promise<void>;
}
