import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
interface Post {
  user_id: number;
  title: string;
  body: string;
  image_url: string;
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { user_id, title, body, image_url } = await request.json();

    const postData: Post = {
      user_id,
      title,
      body, // Ensure this matches the backend expected field name
      image_url: image_url,
    };

    const response = await fetch('https://beamapi.rajvikash-r2022cse.workers.dev/posts/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      console.log('Post successful');
      return json({message:'Posted succesfully'})
      // Redirect to the home route
 
    } else {
      const error = await response.text();
      console.error('Post failed:', error);
      return new Response(JSON.stringify({ error }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error: any) {
    console.error('Network error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
