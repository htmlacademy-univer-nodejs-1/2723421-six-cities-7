import { injectable } from 'inversify';

import type { CommentService } from './comment.service.interface.js';
import type { CreateCommentDto } from './dto/create-comment.dto.js';
import { CommentEntity } from './comment.entity.js';
import { CommentModel } from './comment.model.js';
import { OfferModel } from '../offer/offer.model.js';

@injectable()
export class DefaultCommentService implements CommentService {
  public async create(
    dto: CreateCommentDto,
    authorId: string,
    offerId: string
  ): Promise<void> {
    await CommentModel.create({
      ...dto,
      publicationDate: new Date(),
      author: authorId,
      offerId
    });

    const comments = await CommentModel.find({ offerId });

    const commentCount = comments.length;

    const ratingSum = comments.reduce(
      (sum, comment) => sum + comment.rating,
      0
    );

    const rating = ratingSum / commentCount;

    await OfferModel.findByIdAndUpdate(offerId, {
      commentCount,
      rating
    });
  }

  public async findByOfferId(
    offerId: string
  ): Promise<CommentEntity[]> {
    const documents = await CommentModel
      .find({ offerId })
      .sort({ publicationDate: -1 })
      .limit(50);

    return documents.map((document) => new CommentEntity({
      text: document.text,
      publicationDate: document.publicationDate,
      rating: document.rating,
      authorId: document.author.toString(),
      offerId: document.offerId.toString()
    }));
  }
}
