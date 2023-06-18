import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "../../../../lib/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cookies = new Cookies(req, res);
    const token = cookies.get('token');

    if (token) {
      try {
        const validToken = await verifyToken(token);
        if (validToken) {
          res.status(200).end(); // Respond with a 200 status code if the token is valid
        } else {
          res.status(401).end(); // Respond with a 401 status code if the token is invalid
        }
      } catch (error) {
        res.status(500).end(); // Respond with a 500 status code if an error occurs during token verification
      }
    } else {
      res.status(401).end(); // Respond with a 401 status code if no token is found
    }
  } catch (error) {
    throw new Error('Could not handle authentication request');
  }
}
