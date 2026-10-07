import { HOUSING_TYPES } from '../types/housing-type.type.js';
import type { MockServerOffer } from '../types/mock-server-data.type.js';
import type { Offer } from '../types/offer.type.js';

import {
  getRandomBoolean,
  getRandomInteger,
  getRandomItem,
  getRandomRating
} from './random.js';

export function generateOffer(mockOffer: MockServerOffer): Offer {
  return {
    title: mockOffer.title,
    description: mockOffer.description,
    publicationDate: new Date(),
    city: mockOffer.city,
    previewImage: mockOffer.previewImage,
    images: mockOffer.images,

    isPremium: getRandomBoolean(),
    isFavorite: getRandomBoolean(),

    rating: getRandomRating(),

    housingType: getRandomItem(HOUSING_TYPES),

    rooms: getRandomInteger(1, 8),
    guests: getRandomInteger(1, 10),
    price: getRandomInteger(100, 100000),

    amenities: mockOffer.amenities,

    author: mockOffer.author,

    commentCount: 0,

    location: {
      latitude: getRandomInteger(-900000, 900000) / 10000,
      longitude: getRandomInteger(-1800000, 1800000) / 10000
    }
  };
}
