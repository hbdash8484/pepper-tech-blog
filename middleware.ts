import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const lang = request.nextUrl.pathname.startsWith('/en/') ? 'en' : 'ko';
  response.headers.set('x-lang', lang);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
