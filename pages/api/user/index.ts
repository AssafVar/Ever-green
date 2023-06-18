import { prisma } from "@/prisma/db";
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
      const userToReturn = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }
      res.setHeader('Set-Cookie', [
        `user=${JSON.stringify(userToReturn)}; Max-Age=${tokenMaxAge}; Path=/`,
        `token=${token}; HttpOnly; Secure; Max-Age=${tokenMaxAge}; Path=/`,
      ]);

      return res.status(200).json({ status: "success" });
    } else {
      return res.status(402).send({status: "fail"});
    }
  } catch (error: any) {
    return res.status(500).send(error);
  }
}
