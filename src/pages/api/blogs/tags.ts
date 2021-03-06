import type { NextApiRequest, NextApiResponse } from 'next';
import { getProperties } from '../../../lib/notion/getProperties';

export default async function handle(req :NextApiRequest, res :NextApiResponse){

  try {
    const publish = await getProperties('Tags');

    return res.status(200).json({
      data: publish.results,
    });
  } catch (error: any) {
    console.log(`Error in /api/blogs/tags.ts: ${error}`);
    return {
      results: null,
      cursor: undefined,
      error: {
        message: error.message
      },
    };
  }
}