import { createWriteStream } from 'node:fs';

import type { MockServerOffer } from '../types/mock-server-data.type.js';

import { generateOffer } from './generate-offer.js';
import { getRandomItem } from './random.js';
import { offerToTsv } from './offer-to-tsv.js';

export async function writeOffers(
  count: number,
  filePath: string,
  mockOffers: MockServerOffer[]
): Promise<void> {
  const stream = createWriteStream(filePath, {
    encoding: 'utf-8'
  });

  for (let index = 0; index < count; index++) {
    const mockOffer = getRandomItem(mockOffers);
    const offer = generateOffer(mockOffer);
    const line = offerToTsv(offer);

    if (!stream.write(`${line}\n`)) {
      await new Promise<void>((resolve) => {
        stream.once('drain', resolve);
      });
    }
  }

  stream.end();

  await new Promise<void>((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}
