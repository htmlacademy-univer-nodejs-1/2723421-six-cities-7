import type { Amenity } from './amenity.type.js';
import type { City } from './city.type.js';
import type { User } from './user.type.js';

export type MockServerOffer = {
  id: string;
  title: string;
  description: string;
  city: City;
  previewImage: string;
  images: string[];
  amenities: Amenity[];
  author: User;
};
