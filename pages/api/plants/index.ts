import { NextApiResponse, NextApiRequest } from "next";
import axios from "axios";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {value:field, name} = req.body;
  const response = await axios(
     `https://trefle.io/api/v1/plants/search?token=${process.env.TREFLE_API_TOKEN}&q=${encodeURIComponent(name)}`
  );
  const {data} = response.data;
  res.status(200).json(data);
}
