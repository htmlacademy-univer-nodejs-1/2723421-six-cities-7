import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

import type { Offer } from '../types/offer.type.js';
import { parseOffer } from './parse-offer.js';

export async function readOffers(
  filePath: string,
  onOffer: (offer: Offer) => void | Promise<void>
): Promise<void> {
  const stream = createReadStream(filePath, {
    encoding: 'utf-8'
  });

  const readline = createInterface({
    input: stream,
    crlfDelay: Infinity
  });

  for await (const line of readline) {
    if (line.trim() === '') {
      continue;
    }

    const offer = parseOffer(line);

    await onOffer(offer);
  }
}
