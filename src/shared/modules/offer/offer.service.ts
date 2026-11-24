import { injectable } from 'inversify';

import type { OfferService } from './offer.service.interface.js';
import type { OfferEntity } from './offer.entity.js';
import { OfferModel } from './offer.model.js';

@injectable()
export class DefaultOfferService implements OfferService {
  public async create(
    offer: OfferEntity,
    authorId: string
  ): Promise<void> {
    await OfferModel.create({
      ...offer,
      author: authorId
    });
  }

  public async findById(id: string): Promise<boolean> {
    const document = await OfferModel.findById(id);

    return document !== null;
  }
}
