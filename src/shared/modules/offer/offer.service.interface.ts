import type { City } from '../../../types/city.type.js';

import type { CreateOfferDto } from './dto/create-offer.dto.js';
import type { UpdateOfferDto } from './dto/update-offer.dto.js';
import type { OfferDocument } from './offer.model.js';

export interface OfferService {
  create(
    dto: CreateOfferDto,
    authorId: string
  ): Promise<void>;

  findById(id: string): Promise<OfferDocument | null>;

  find(): Promise<OfferDocument[]>;

  findPremiumByCity(city: City): Promise<OfferDocument[]>;

  findFavorites(): Promise<OfferDocument[]>;

  updateById(
    id: string,
    dto: UpdateOfferDto
  ): Promise<void>;

  deleteById(id: string): Promise<void>;

  changeFavoriteStatus(
    id: string,
    isFavorite: boolean
  ): Promise<void>;
}
