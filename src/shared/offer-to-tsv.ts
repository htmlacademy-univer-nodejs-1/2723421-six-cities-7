import type { Offer } from '../types/offer.type.js';

export function offerToTsv(offer: Offer): string {
  return [
    offer.title,
    offer.description,
    offer.publicationDate.toISOString(),
    offer.city,
    offer.previewImage,
    offer.images.join(';'),
    String(offer.isPremium),
    String(offer.isFavorite),
    String(offer.rating),
    offer.housingType,
    String(offer.rooms),
    String(offer.guests),
    String(offer.price),
    offer.amenities.join(';'),
    offer.author.name,
    offer.author.email,
    offer.author.avatarUrl ?? '',
    offer.author.password,
    offer.author.type,
    String(offer.location.latitude),
    String(offer.location.longitude)
  ].join('\t');
}
