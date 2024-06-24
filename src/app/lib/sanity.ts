import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  apiVersion: '2023-05-03',
  dataset: 'production',
  // You take this ID from https://www.sanity.io/ from your project
  projectId: 'tg322ijd',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
