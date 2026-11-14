export class CommentEntity {
  public text: string;
  public publicationDate: Date;
  public rating: number;
  public authorId: string;
  public offerId: string;

  constructor(comment: CommentEntity) {
    this.text = comment.text;
    this.publicationDate = comment.publicationDate;
    this.rating = comment.rating;
    this.authorId = comment.authorId;
    this.offerId = comment.offerId;
  }
}
