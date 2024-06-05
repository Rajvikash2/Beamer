import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const GET: RequestHandler = async () => {
  const response = await fetch('https://beamapi.rajvikash-r2022cse.workers.dev/all-posts');
  const data: Product[] = await response.json();
  

  return json(data);
};