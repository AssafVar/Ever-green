import { NextApiRequest, NextApiResponse } from 'next';
import conn from '../../../lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log("req nom", req.body)
        const query = 'SELECT * FROM posts'
        const values = [req.body.content, 1]
      const result = await conn.query(
          query,
      );
      //console.log( "ttt",result );
      return res.status( 200 ).json( result.rows );
  } catch ( error ) {
      console.log( error );
  }
}




