import { injectable } from 'inversify';

import type { City } from '../../../types/city.type.js';

import type { OfferService } from './offer.service.interface.js';
import type { CreateOfferDto } from './dto/create-offer.dto.js';
import type { UpdateOfferDto } from './dto/update-offer.dto.js';
import type { OfferDocument } from './offer.model.js';
import { OfferModel } from './offer.model.js';

@injectable()
export class DefaultOfferService implements OfferService {
  public async create(
    dto: CreateOfferDto,
    authorId: string
  ): Promise<void> {
    await OfferModel.create({
      ...dto,
      publicationDate: new Date(),
      isFavorite: false,
      author: authorId,
      commentCount: 0
    });
  }

  public async findById(
    id: string
  ): Promise<OfferDocument | null> {
    return OfferModel.findById(id);
  }

  public async find(): Promise<OfferDocument[]> {
    return OfferModel
      .find()
      .sort({ publicationDate: -1 })
      .limit(60);
  }

  public async findPremiumByCity(
    city: City
  ): Promise<OfferDocument[]> {
    return OfferModel
      .find({
        city,
        isPremium: true
      })
      .sort({ publicationDate: -1 })
      .limit(3);
  }

  public async findFavorites(): Promise<OfferDocument[]> {
    return OfferModel.find({
      isFavorite: true
    });
  }

  public async updateById(
    id: string,
    dto: UpdateOfferDto
  ): Promise<void> {
    await OfferModel.findByIdAndUpdate(id, dto);
  }

  public async deleteById(id: string): Promise<void> {
    await OfferModel.findByIdAndDelete(id);
  }

  public async changeFavoriteStatus(
    id: string,
    isFavorite: boolean
  ): Promise<void> {
    await OfferModel.findByIdAndUpdate(id, {
      isFavorite
    });
  }
}
