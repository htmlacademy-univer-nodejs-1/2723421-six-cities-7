import type { Amenity } from '../../../types/amenity.type.js';
import type { City } from '../../../types/city.type.js';
import type { HousingType } from '../../../types/housing-type.type.js';
import type { Location } from '../../../types/location.type.js';
import type { UserEntity } from '../user/user.entity.js';

export class OfferEntity {
  public title: string;
  public description: string;
  public publicationDate: Date;
  public city: City;
  public previewImage: string;
  public images: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public housingType: HousingType;
  public rooms: number;
  public guests: number;
  public price: number;
  public amenities: Amenity[];
  public author: UserEntity;
  public commentCount: number;
  public location: Location;

  constructor(offer: OfferEntity) {
    this.title = offer.title;
    this.description = offer.description;
    this.publicationDate = offer.publicationDate;
    this.city = offer.city;
    this.previewImage = offer.previewImage;
    this.images = offer.images;
    this.isPremium = offer.isPremium;
    this.isFavorite = offer.isFavorite;
    this.rating = offer.rating;
    this.housingType = offer.housingType;
    this.rooms = offer.rooms;
    this.guests = offer.guests;
    this.price = offer.price;
    this.amenities = offer.amenities;
    this.author = offer.author;
    this.commentCount = offer.commentCount;
    this.location = offer.location;
  }
}
