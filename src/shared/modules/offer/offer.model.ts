import { model } from 'mongoose';

import { OfferSchema } from './offer.schema.js';

export const OfferModel = model('Offer', OfferSchema);
