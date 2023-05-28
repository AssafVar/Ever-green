import { NextApiResponse, NextApiRequest } from "next";
import axios from "axios";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios(
    `https://trefle.io/api/v1/plants?token=${process.env.TREFLE_API_TOKEN}`
  );
  const {data} = response.data;
  res.status(200).json(data);
}
