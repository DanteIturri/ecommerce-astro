import type { APIRoute } from 'astro';
import fs from 'fs/promises';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      title: 'Kind Burguer',
    }),
  )
}

 export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  return new Response(
    JSON.stringify({
      title: 'Kind Burguer',
      body,
    }),
  )
}