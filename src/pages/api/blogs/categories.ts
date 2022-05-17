import type { NextApiRequest, NextApiResponse } from 'next'
import {getCategories} from '../../../lib/notion';

export default async function handle(req :NextApiRequest, res :NextApiResponse){

  const publish = await getCategories();

  return res.status(200).json({
    data: publish,
  })
}