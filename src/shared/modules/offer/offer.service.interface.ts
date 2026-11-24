import type { OfferEntity } from './offer.entity.js';

export interface OfferService {
  create(offer: OfferEntity, authorId: string): Promise<void>;
  findById(id: string): Promise<boolean>;
}
