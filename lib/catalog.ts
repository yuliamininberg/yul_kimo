import { groq } from 'next-sanity';
import { isSanityConfigured, sanityClient } from './sanity';

export type Locale = 'he' | 'en';
export type Availability = 'available' | 'madeToOrder' | 'soldOut';
export type Product = {
  _id: string; title: string; slug: string; price?: number; currency?: string;
  availability: Availability; description?: string; imageUrl?: string; imageAlt?: string;
};
const productQuery = groq`*[_type == "product" && defined(slug.current)] | order(_createdAt desc) {
  _id, "slug": slug.current, "title": title[$locale], price, currency, availability,
  "description": description[$locale], "imageUrl": image.asset->url, "imageAlt": image.alt[$locale]
}`;
export async function getProducts(locale: Locale): Promise<Product[]> {
  if (!isSanityConfigured) return [];
  try { return await sanityClient.fetch(productQuery, { locale }); }
  catch (error) { console.error('Sanity catalog request failed:', error); return []; }
}
export async function getProduct(locale: Locale, slug: string): Promise<Product | null> {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch(groq`*[_type == "product" && slug.current == $slug][0] {
      _id, "slug": slug.current, "title": title[$locale], price, currency, availability,
      "description": description[$locale], "imageUrl": image.asset->url, "imageAlt": image.alt[$locale]
    }`, { locale, slug });
  } catch (error) { console.error('Sanity product request failed:', error); return null; }
}
