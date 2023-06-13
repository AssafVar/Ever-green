import { NextRequest, NextResponse } from 'next/server';
import Cookies from 'cookies';

export default function handler(req: NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    const cookies = new Cookies(req, res);
    cookies.set('token', null, { expires: new Date(0) });
    cookies.set('user', null, { expires: new Date(0) });
  }

  return res.status(200).json({ status: 'success' });
}