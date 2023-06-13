import { User } from '@/typings';
import jwt, { Secret } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET_KEY ? process.env.JWT_SECRET_KEY : '';


const generateToken = (user: User): string => {
  const token = jwt.sign(user, secret, { expiresIn: '1h' });
  return token;
}

const verifyToken = (token: string): any => {
  try {
    const decoded = jwt.verify(token, secret, (err, result) => {
      if (err){
        const error: any = new Error();
        error.code = 'UNAUTHORIZED';
        error.message = 'You are not authorized to access this resource.';
        throw error;
      };
      return result;
    });
    return decoded
  } catch (error) {
    return null;
  }
}
const apolloMiddlewareGuard = async (cookies: any, cookieName: string) => {
  const myCookie = cookies.get(cookieName);
  const response = await verifyToken(myCookie);
  if (!response || response?.exp < Date.now() / 1000) {
    const error: any = new Error();
    error.code = 'UNAUTHORIZED';
    error.message = 'You are not authorized to access this resource.';
    throw error;
  }
  return response
}

export { generateToken, verifyToken, apolloMiddlewareGuard };
