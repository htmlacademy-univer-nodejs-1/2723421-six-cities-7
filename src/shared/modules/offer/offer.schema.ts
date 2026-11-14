import { Schema } from 'mongoose';

import { AMENITIES } from '../../../types/amenity.type.js';
import { CITIES } from '../../../types/city.type.js';
import { HOUSING_TYPES } from '../../../types/housing-type.type.js';

export const OfferSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 100
  },

  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 1024
  },

  publicationDate: {
    type: Date,
    required: true
  },

  city: {
    type: String,
    enum: CITIES,
    required: true
  },

  previewImage: {
    type: String,
    required: true
  },

  images: {
    type: [String],
    required: true,
    validate: {
      validator: (images: string[]) => images.length === 6,
      message: 'Количество изображений должно быть равно 6'
    }
  },

  isPremium: {
    type: Boolean,
    required: true
  },

  isFavorite: {
    type: Boolean,
    required: true
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },

  housingType: {
    type: String,
    enum: HOUSING_TYPES,
    required: true
  },

  rooms: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },

  guests: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },

  price: {
    type: Number,
    required: true,
    min: 100,
    max: 100000
  },

  amenities: {
    type: [String],
    enum: AMENITIES,
    required: true
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  commentCount: {
    type: Number,
    required: true,
    default: 0
  },

  location: {
    latitude: {
      type: Number,
      required: true
    },

    longitude: {
      type: Number,
      required: true
    }
  }
},
{
  timestamps: true
});
