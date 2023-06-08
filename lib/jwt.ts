import { User } from '@/typings';
import jwt, { Secret } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET_KEY? process.env.JWT_SECRET_KEY :'';


const generateToken = (user: User): string => {
  const token = jwt.sign(user, secret, { expiresIn: '1h' });
  return token;
}

const verifyToken = (token: string): User | null => {
  try {
    const decoded = jwt.verify(token, secret) as User;
    return decoded;
  } catch (error) {
    return null;
  }
}

export { generateToken, verifyToken };
