import type { CreateCommentDto } from './dto/create-comment.dto.js';
import type { CommentEntity } from './comment.entity.js';

export interface CommentService {
  create(
    dto: CreateCommentDto,
    authorId: string,
    offerId: string
  ): Promise<void>;

  findByOfferId(offerId: string): Promise<CommentEntity[]>;
}
