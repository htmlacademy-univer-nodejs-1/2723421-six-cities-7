import type { UserEntity } from '../user/user.entity.js';

export class CommentEntity {
  public text: string;
  public publicationDate: Date;
  public rating: number;
  public author: UserEntity;

  constructor(comment: CommentEntity) {
    this.text = comment.text;
    this.publicationDate = comment.publicationDate;
    this.rating = comment.rating;
    this.author = comment.author;
  }
}
