import { injectable } from 'inversify';

import type { CommentService } from './comment.service.interface.js';
import type { CommentEntity } from './comment.entity.js';
import { CommentModel } from './comment.model.js';

@injectable()
export class DefaultCommentService implements CommentService {
  public async create(comment: CommentEntity): Promise<void> {
    await CommentModel.create(comment);
  }
}
