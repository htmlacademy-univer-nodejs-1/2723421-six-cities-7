import { model, type InferSchemaType } from 'mongoose';

import { OfferSchema } from './offer.schema.js';

export type OfferDocument = InferSchemaType<typeof OfferSchema>;

export const OfferModel = model<OfferDocument>('Offer', OfferSchema);
