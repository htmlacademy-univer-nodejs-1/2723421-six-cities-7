import type { Amenity } from '../../../../types/amenity.type.js';
import type { City } from '../../../../types/city.type.js';
import type { HousingType } from '../../../../types/housing-type.type.js';
import type { Location } from '../../../../types/location.type.js';

export interface UpdateOfferDto {
  title?: string;
  description?: string;
  city?: City;
  previewImage?: string;
  images?: string[];
  isPremium?: boolean;
  housingType?: HousingType;
  rooms?: number;
  guests?: number;
  price?: number;
  amenities?: Amenity[];
  location?: Location;
}
