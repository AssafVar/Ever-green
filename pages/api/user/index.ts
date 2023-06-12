import { prisma } from "@/lib/prisma/db";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs'
import { generateToken } from "@/lib/jwt";
import { User } from "@/typings";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      const user: User | null = await prisma.user.findUnique({
        where: {
          email: email,
        }
      });

      if (!user) {
        return res.status(401).json({ error: 'Wrong email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Wrong email or password' });
      }

      const token = generateToken(user);
      const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
      const tokenMaxAge = JWT_EXPIRES_IN ? parseInt(JWT_EXPIRES_IN) * 60 : undefined;

      res.setHeader('Set-Cookie', [
        `token=${token}; HttpOnly; Secure; Max-Age=${tokenMaxAge}; Path=/`,
        `logged-in=true; HttpOnly; Secure; Path=/`,
      ]);

      return res.status(200).json({ status: "success", token });
    } else {
      return res.status(402).end();
    }
  } catch (error: any) {
    return res.status(500).send(error);
  }
}
