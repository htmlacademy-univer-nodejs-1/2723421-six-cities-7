import { AMENITIES } from '../types/amenity.type.js';
import { CITIES } from '../types/city.type.js';
import { HOUSING_TYPES } from '../types/housing-type.type.js';
import type { Offer } from '../types/offer.type.js';
import { USER_TYPES } from '../types/user.type.js';

function parseText(
  value: string,
  field: string,
  minLength: number,
  maxLength: number
): string {
  const text = value.trim();

  if (text.length < minLength || text.length > maxLength) {
    throw new Error(
      `${field}: длина должна быть от ${minLength} до ${maxLength} символов`
    );
  }

  return text;
}

function parseNumber(
  value: string,
  field: string,
  min: number,
  max: number,
  integer = false
): number {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    throw new Error(`${field}: ожидается число`);
  }

  if (number < min || number > max) {
    throw new Error(`${field}: значение должно быть от ${min} до ${max}`);
  }

  if (integer && !Number.isInteger(number)) {
    throw new Error(`${field}: ожидается целое число`);
  }

  return number;
}

function parseBoolean(value: string, field: string): boolean {
  if (value !== 'true' && value !== 'false') {
    throw new Error(`${field}: ожидается true или false`);
  }

  return value === 'true';
}

function parseChoice<T extends string>(
  value: string,
  allowedValues: readonly T[],
  field: string
): T {
  const result = allowedValues.find((item) => item === value);

  if (result === undefined) {
    throw new Error(`${field}: недопустимое значение "${value}"`);
  }

  return result;
}

export function parseOffer(line: string): Offer {
  const [
    title,
    description,
    publicationDate,
    city,
    previewImage,
    images,
    isPremium,
    isFavorite,
    rating,
    housingType,
    rooms,
    guests,
    price,
    amenities,
    authorName,
    authorEmail,
    authorAvatar,
    authorPassword,
    authorType,
    latitude,
    longitude
  ] = line.split('\t');

  const parsedPublicationDate = new Date(publicationDate);

  if (Number.isNaN(parsedPublicationDate.getTime())) {
    throw new Error('Некорректная дата публикации');
  }

  const parsedImages = images
    .split(';')
    .map((image) => image.trim());

  if (
    parsedImages.length !== 6 ||
        parsedImages.some((image) => image === '')
  ) {
    throw new Error('Фотографии: должно быть ровно 6 изображений');
  }

  if (!previewImage.trim()) {
    throw new Error('Превью изображения не должно быть пустым');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(authorEmail)) {
    throw new Error('Email автора: некорректный адрес');
  }

  if (
    authorAvatar &&
        !/\.(jpg|png)$/i.test(authorAvatar)
  ) {
    throw new Error('Аватар автора должен иметь формат .jpg или .png');
  }

  const parsedRating = parseNumber(rating, 'Рейтинг', 1, 5);

  if (!Number.isInteger(parsedRating * 10)) {
    throw new Error(
      'Рейтинг: допускается не более одного знака после точки'
    );
  }

  return {
    title: parseText(title, 'Название', 10, 100),
    description: parseText(description, 'Описание', 20, 1024),
    publicationDate: parsedPublicationDate,
    city: parseChoice(city, CITIES, 'Город'),
    previewImage: previewImage.trim(),
    images: parsedImages,
    isPremium: parseBoolean(isPremium, 'Премиум'),
    isFavorite: parseBoolean(isFavorite, 'Избранное'),
    rating: parsedRating,
    housingType: parseChoice(housingType, HOUSING_TYPES, 'Тип жилья'),
    rooms: parseNumber(rooms, 'Количество комнат', 1, 8, true),
    guests: parseNumber(guests, 'Количество гостей', 1, 10, true),
    price: parseNumber(price, 'Стоимость аренды', 100, 100000),
    amenities: amenities
      .split(';')
      .map((amenity) =>
        parseChoice(amenity.trim(), AMENITIES, 'Удобства')),
    author: {
      name: parseText(authorName, 'Имя автора', 1, 15),
      email: authorEmail,
      avatarUrl: authorAvatar || undefined,
      password: parseText(authorPassword, 'Пароль автора', 6, 12),
      type: parseChoice(authorType, USER_TYPES, 'Тип пользователя')
    },
    commentCount: 0,
    location: {
      latitude: parseNumber(latitude, 'Широта', -90, 90),
      longitude: parseNumber(longitude, 'Долгота', -180, 180)
    }
  };
}
