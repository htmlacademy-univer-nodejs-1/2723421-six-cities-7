import axios from 'axios';

import type { MockServerOffer } from '../types/mock-server-data.type.js';

export async function loadMockOffers(
  url: string
): Promise<MockServerOffer[]> {
  const response = await axios.get<MockServerOffer[]>(url);

  return response.data;
}
